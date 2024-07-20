<script lang="ts" setup>
import CalendarComp from "@/components/calendar/CalendarComp.vue";
import ReservationComp from "@/components/calendar/ReservationComp.vue";
import RegisterSchedule from "@/components/calendar/RegisterSchedule.vue";
import type { CalendarDay,CalendarDate } from "@/interface/calendarday.interface";
import { inject, ref } from "vue";
import { saveSchedule, updateSchedule } from "@/api/scheduleApi";
import type {   RegisterItem,  ListItem } from "@/interface/reservation.interface";
import type { SaveSchedule } from "@/interface/schedule.interface";
import { getMonthSchedule } from "@/api/meetingApi";
import { uniqBy } from "lodash"
import type { Page } from "v-calendar/dist/types/src/utils/page";
const dayjs = inject("dayjs");
const curDate = ref<Date>(new Date());
const dayjsObject = new (dayjs as any)(new Date())



/**
 * @description 캘린더 데이터 포멧
 */
const setformatCalendar = async (yyyymm:string)=>{
  dateAttribute.value = [];
  try {
    const { data }=  await getMonthSchedule(yyyymm);
    
    if(Array.isArray(data)){
      const monthList = uniqBy(data,"scheduleDate")
      const dayGroup = monthList.map(item => item.scheduleDate)

      const dayGroupLen = dayGroup.length;
      
      // 월별 조회
      for(let dayGroupIndex = 0 ; dayGroupIndex < dayGroupLen ;dayGroupIndex++){
        const dateAttributeObject = {
          key:"group"+(dayGroupIndex+1),
          highlight:"blue",
          dates:new Date(dayGroup[dayGroupIndex]),
          list:new Array<ListItem>()
        }

        // 해당 일자 추출
        const findDayList = data.filter(item => item.scheduleDate === dayGroup[dayGroupIndex]);
        if(findDayList.length > 0){
          const findDayListLen = findDayList.length;
          for(let findDayIndex = 0 ; findDayIndex < findDayListLen ; findDayIndex++){
            
            const listItem:ListItem = {
              name: `${findDayList[findDayIndex]["scheduleStartTime"]} ~ ${findDayList[findDayIndex]["scheduleEndTime"]}`,
              id:findDayList[findDayIndex].id,
              icon:"",
              scheduleStartTime:findDayList[findDayIndex]["scheduleStartTime"],
              scheduleEndTime:findDayList[findDayIndex]["scheduleEndTime"],
              roomname:findDayList[findDayIndex]["meetingRoomName"] ? findDayList[findDayIndex]["meetingRoomName"] : "미지정",
              roomcode:findDayList[findDayIndex]["meetingRoomCode"],
              date:new Date(`${findDayList[findDayIndex]["scheduleDate"]}`)
            }
            dateAttributeObject.list.push(listItem)
          }
        }

        dateAttribute.value.push(dateAttributeObject)
      }
    }
  } catch (error) {
    console.error("setformatCalendar error : ",error);   
  }
}

/**
 * @description 캘린더 데이터 선택
 * @param val 캘린더데이터
 */
const onDayClick = (val:CalendarDay)=>{
  const { date:diffDate } = val;
  curDate.value = diffDate; 
  setDayreservation(diffDate)
}


/**
 * @description 모달 오픈
 */
const openDialog = ()=>{
  dialog.value = true;
}

const onUpdateSchedule = async (item:SaveSchedule) =>{
  try {
    await updateSchedule(item);
    dialog.value = false;
    if(!isOpenSnackBar.value){
      setTimeout(() => {
        isOpenSnackBar.value = false;
      }, 2000);
    }
    isOpenSnackBar.value = true;
  } catch (error) {
    console.log("error : ",error);
  }finally{
    await setformatCalendar(yyyymm.value)
    setDayreservation(curDate.value)
  }
}

/**
 * 
 * @param item 저장될 스케줄
 */
const onSaveSchedule = async (item:SaveSchedule) =>{
  try {
    const result =  await saveSchedule(item);
    const { resultCd } = result.data;
    if(resultCd === "0000"){
      dialog.value = false;
    }
    if(!isOpenSnackBar.value){
      setTimeout(() => {
        isOpenSnackBar.value = false;
      }, 2000);
    }
    isOpenSnackBar.value = true;
  } catch (error) {
    console.log("error : ",error);
  } finally{
    await setformatCalendar(yyyymm.value)
    setDayreservation(curDate.value)
  }
}

const onUpdateView = (page:Page) =>{
  yyyymm.value = page.id;
  setformatCalendar(page.id)
}

/**
 * @description 날짜 수정
 * @param item ListItem
 */
const onClickEdit = (item:ListItem)=>{
  const scheduleItem:RegisterItem = {
    datatype:2,
    id:item.id,
    scheduleStartTime:item.scheduleStartTime,
    scheduleEndTime:item.scheduleEndTime,
    meetingRoomCode:item.roomcode
  }
  registerItemObject.value = scheduleItem;
  dialog.value = true;
}

const setDayreservation = (diffDate:Date)=>{
  curDate.value = diffDate; 
  const findDate = dateAttribute.value.find(item=>{
    const date = item.dates;
    if(date && diffDate){
      const yyyy = date?.getFullYear();
      const mm = date?.getMonth() + 1;
      const dd = date?.getDate();

      const diff = diffDate;
      const diffYyyy = diff.getFullYear();
      const diffmm = diff.getMonth() + 1;
      const diffdd = diff.getDate();

      if(yyyy === diffYyyy && mm === diffmm && dd === diffdd){
        return item
      }else{
        return undefined
      }
    }
    

    return undefined;
  })
  
  if(findDate){
    const { list } = findDate;
    if(list) dayReservationList.value = list;
    
  }else{
    dayReservationList.value = []
  }
}

const init = async ()=>{
  await setformatCalendar(yyyymm.value);
  setDayreservation(new Date());
}
const dateAttribute = ref<CalendarDate[]>([]);
const dayReservationList = ref<ListItem[]>([]);
const dialog = ref<boolean>(false);
const yyyymm =  ref<string>(dayjsObject.getFormat("YYYY-MM"));
const registerItemObject = ref<RegisterItem | null>(null);
const isOpenSnackBar = ref<boolean>(false);

init();

const isLoading = ref<boolean>(false);
</script>
<template>
  <v-container>
    <RegisterSchedule @save-schedule="onSaveSchedule" @update-schedule="onUpdateSchedule" :registeritem="registerItemObject" :selectdate="curDate" :dialog="dialog" @close-dialog="dialog=false"/>
    <CalendarComp :currentdate="curDate" :reslist="dateAttribute" @click-day="onDayClick" @update-page="onUpdateView"/>
    <div class="d-flex mt-5">
      <v-btn color="indigo" @click="openDialog">
        예약등록
      </v-btn>
    </div>
    <ReservationComp @click-edit="onClickEdit" :selectdate="curDate" :isloading="isLoading" :dayreservationlist="dayReservationList"/>

    <v-snackbar  :timeout="2000"
                 color="primary"
                 :model-value="isOpenSnackBar"
                 variant="tonal">
      저장 되었습니다</v-snackbar>
  </v-container>
</template>

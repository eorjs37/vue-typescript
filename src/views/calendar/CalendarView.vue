<script lang="ts" setup>
import CalendarComp from "@/components/calendar/CalendarComp.vue";
import ReservationComp from "@/components/calendar/ReservationComp.vue";
import RegisterSchedule from "@/components/calendar/RegisterSchedule.vue";
import type { CalendarDay,CalendarDate } from "@/interface/calendarday.interface";
import { ref } from "vue";
import { saveSchedule } from "@/api/calendarApi";
import type { ListItem } from "@/interface/reservation.interface";
import type { SaveSchedule } from "@/interface/schedule.interface";
import { getMeetingMonth } from "@/api/meetingApi";
const curDate = ref<Date>(new Date());

/**
 * 
 * @param meetingList 미팅예약 리스트
 * @return CalendarDate[]
 */
const getFormatDateAttribute = (meetingList = []) =>{
  const resultData:CalendarDate[] = [];
  const len = meetingList.length;
  for(let  i = 0 ; i < len ; i++){
    const scheduleDate = meetingList[i]["scheduleDate"];
    
    const findDateAttribute = resultData.find(item => item["key"] === scheduleDate);    
    if(findDateAttribute){
      const { list } = findDateAttribute;
      
      if(list){
        const listObj:ListItem = {
          id:meetingList[i]["id"],
          name:`${meetingList[i]["scheduleStartTime"]}~${meetingList[i]["scheduleEndTime"]}`,
          roomname:meetingList[i]["meetingRoomName"]
        }
        list.push(listObj)
      }
    } else{
      const listObj:ListItem = {
        id:meetingList[i]["id"],
        name:`${ String(meetingList[i]["scheduleStartTime"])}~${meetingList[i]["scheduleEndTime"]}`,
        roomname:`${meetingList[i]["meetingRoomName"]}`
      }

      const obj:CalendarDate = {
        key:scheduleDate,
        highlight:{
          color: "purple",
          fillMode: "light", 
        },
        dates:new Date(scheduleDate),
        list:[
          listObj
        ]
      }
      resultData.push(obj);
    }
    
  }
  return resultData;
}

/**
 * @description 캘린더 데이터 포멧
 */
const setformatCalendar = (yyyymm:string)=>{

  getMeetingMonth(yyyymm)
    .then(res=>{
      const list = res.data;
      const result = getFormatDateAttribute(list);
      dateAttribute.value = [...result];
    })
}

/**
 * @description 날짜 찾기
 * @param date 날짜
 */
const findDate = (diffDate:Date)=>{
  return dateAttribute.value.find(item =>{
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
}

/**
 * 
 * @param returnDate 비교값
 */
const setDayReservationList = (returnDate:any)=>{
  if(returnDate){
    const { list } = returnDate;
    if(list) dayReservationList.value = list;
    
  }else{
    dayReservationList.value = []
  }
}

/**
 * @description 캘린더 데이터 선택
 * @param val 캘린더데이터
 */
const onDayClick = (val:CalendarDay)=>{
  const { date:diffDate } = val;
  curDate.value = diffDate; 
  isLoading.value = true;

  const returnDate = findDate(diffDate);
  
  setDayReservationList(returnDate);
  isLoading.value = false;
}


/**
 * @description 모달 오픈
 */
const openDialog = ()=>{
  dataType.value = 1;
  dialog.value = true;
  startTime.value ="";
  endTime.value = ""
}

/**
 * 
 * @param item 저장될 스케줄
 */
const onSaveSchedule = async (item:SaveSchedule) =>{
  try {
    if(dataType.value === 1){
      const { data } = await saveSchedule(item);
      const { resultCd } = data;
      if(resultCd === "0000"){
        snackBar.value = true;
      }else{
        alert("시간을 확인해주세요");
      }
    }else{
      //
    }
    
  } catch (error) {
    console.error("error : ",error);
    
  }
}

/**
 * 
 * @param yyyymm : yyyy-mm
 */
const onChangeMonth = (yyyymm:string)=>{
  getMeetingMonth(yyyymm)
    .then(res=>{
      const list = res.data;
      const result = getFormatDateAttribute(list);
      dateAttribute.value = [...result];
    
    })  
}

/**
 * @description 스케줄 수정
 */
const onUpdateSchedule = (val:any)=>{
  dataType.value = 2;
  const { name } = val;
  
  const start = name.split("~")[0];
  const end = name.split("~")[1];

  startTime.value =start;
  endTime.value = end;
  dialog.value = true;
}


const dateAttribute = ref<CalendarDate[]>([]);
const dayReservationList = ref<ListItem[]>([]);
const dialog = ref<boolean>(false);
const snackBar = ref<boolean>(false);
const snackBarText = ref<string>("예약되었습니다");

const startTime = ref<string>("");
const endTime = ref<string>("");

const today = new Date();
const yyyy = today.getFullYear();
const mm = today.getMonth()+1 > 9 ? today.getMonth()+1 : `0${today.getMonth()+1}`;
setformatCalendar(`${yyyy}-${mm}`);

const isLoading = ref<boolean>(false);
const dataType = ref<Number>(1);
</script>
<template>
  <v-container>
    <RegisterSchedule @save-schedule="onSaveSchedule" :starttime="startTime" :endtime="endTime" :selectdate="curDate" :dialog="dialog" @close-dialog="dialog=false"/>
    <CalendarComp :currentdate="curDate" :reslist="dateAttribute" @click-day="onDayClick" @change-month="onChangeMonth"/>
    <div class="d-flex mt-5">
      <v-btn color="indigo" @click="openDialog">
        예약등록
      </v-btn>
    </div>
    <ReservationComp @update-schedule="onUpdateSchedule"  :selectdate="curDate" :isloading="isLoading" :dayreservationlist="dayReservationList"/>
    <v-snackbar :model-value="snackBar" :timeout="2000">
      {{ snackBarText }}
    </v-snackbar>
  </v-container>
</template>

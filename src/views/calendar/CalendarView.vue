<script lang="ts" setup>
import CalendarComp from "@/components/calendar/CalendarComp.vue";
import ReservationComp from "@/components/calendar/ReservationComp.vue";
import RegisterSchedule from "@/components/calendar/RegisterSchedule.vue";
import type { CalendarDay,CalendarDate } from "@/interface/calendarday.interface";
import { inject, ref } from "vue";
import { saveSchedule } from "@/api/scheduleApi";
import type { ListItem } from "@/interface/reservation.interface";
import type { SaveSchedule } from "@/interface/schedule.interface";
import { getMonthSchedule } from "@/api/meetingApi";
import { uniqBy } from "lodash"
const dayjs = inject("dayjs");
const curDate = ref<Date>(new Date());
const dayjsObject = new (dayjs as any)(new Date())


/**
 * @description 캘린더 데이터 포멧
 */
const setformatCalendar = async ()=>{
  const yyyymm = dayjsObject.getFormat("YYYY-MM");
  try {
    const { data }=  await getMonthSchedule(yyyymm);
    
    if(Array.isArray(data)){
      const monthList = uniqBy(data,"scheduleDate")
      console.log(monthList.map(item => item.scheduleDate));
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
  isLoading.value = true;
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
  isLoading.value = false;
}


/**
 * @description 모달 오픈
 */
const openDialog = ()=>{
  dialog.value = true;
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
    
  } catch (error) {
    console.log("error : ",error);
    
  }
}

const dateAttribute = ref<CalendarDate[]>([
  {
    key:"group1",
    highlight:"blue",
    dates:new Date(),
    list:[
      {
        name:"회의실1",
        id:1,
        icon:"",
        roomname:"소회의실1",
        date:new Date()
      }
    ]
  }
]);
const dayReservationList = ref<ListItem[]>([]);
const dialog = ref<boolean>(false);

setformatCalendar();

const isLoading = ref<boolean>(false);
</script>
<template>
  <v-container>
    <RegisterSchedule @save-schedule="onSaveSchedule" :selectdate="curDate" :dialog="dialog" @close-dialog="dialog=false"/>
    <CalendarComp :currentdate="curDate" :reslist="dateAttribute" @click-day="onDayClick"/>
    <div class="d-flex mt-5">
      <v-btn color="indigo" @click="openDialog">
        예약등록
      </v-btn>
    </div>
    <ReservationComp :selectdate="curDate" :isloading="isLoading" :dayreservationlist="dayReservationList"/>
  </v-container>
</template>

<script lang="ts" setup>
import CalendarComp from "@/components/calendar/CalendarComp.vue";
import ReservationComp from "@/components/calendar/ReservationComp.vue";
import type { CalendarDay,CalendarDate } from "@/interface/calendarday.interface";
import { ref } from "vue";
import { getCalendarList } from "@/api/calendarApi";
import type { ListItem } from "@/interface/reservation.interface";
const curDate = ref<Date>(new Date());

/**
 * @description 캘린더 데이터 포멧
 */
const setformatCalendar = ()=>{
  getCalendarList().then(res=>{
    const { list } = res.data;
    const len = list.length;
    for(let i = 0 ; i < len ;i++){
      const obj:CalendarDate = {
        key:list[i]["key"],
        highlight:{
          color: "purple",
          fillMode: "light", 
        },
        dates:new Date(list[i]["dates"]),
        list:list[i]["list"]
      }
      dateAttribute.value.push(obj)
    }
  })
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

const dateAttribute = ref<CalendarDate[]>([]);
const dayReservationList = ref<ListItem[]>([]);

setformatCalendar();

const isLoading = ref<boolean>(false);
</script>
<template>
  <v-container>
    <CalendarComp :currentdate="curDate" :reslist="dateAttribute" @click-day="onDayClick"/>
    <ReservationComp :selectdate="curDate" :isloading="isLoading" :dayreservationlist="dayReservationList"/>
  </v-container>
</template>

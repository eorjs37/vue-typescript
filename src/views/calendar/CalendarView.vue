<script lang="ts" setup>
import CalendarComp from "@/components/calendar/CalendarComp.vue";
import ReservationComp from "@/components/calendar/ReservationComp.vue";
import type { CalendarDay,CalendarDate } from "@/interface/calendarday.interface";
import { ref } from "vue";
const curDate = ref<Date>(new Date());

const onDayClick = (val:CalendarDay)=>{
  const { date } = val;
  curDate.value = date; 
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
}

const dateAttribute = ref<CalendarDate[]>([
  {
    key: "meetingroom1",
    highlight: {
      color: "purple",
      fillMode: "light",
    },
    dates: new Date(),
    list:[]
  },
  {
    key:"meeingroom2",
    highlight: {
      color: "blue",
      fillMode: "light",
    },
    dates: new Date("2024-05-01"),
    list:[
      {
        id:1,
        name:"10:00 ~ 12:00",
        icon:"md:home",
        roomname:"소회의실1",
      },
      {
        id:2,
        name:"12:00 ~ 14:00",
        icon:"mdi-clock",
        roomname:"소회의실2"
      }
    ]
  },
  {
    key:"meeingroom3",
    highlight: {
      color: "blue",
      fillMode: "light",
    },
    dates: new Date("2024-05-20"),
    list:[
      {
        id:1,
        name:"10:00 ~ 12:00",
        icon:"md:home",
        roomname:"소회의실1",
      },
      {
        id:2,
        name:"12:00 ~ 14:00",
        icon:"mdi-clock",
        roomname:"소회의실2"
      }
    ]
  },
  {
    key:"meeingroom3",
    highlight: {
      color: "blue",
      fillMode: "light",
    },
    dates: new Date("2024-05-22"),
    list:[
      {
        id:1,
        name:"10:00 ~ 12:00",
        icon:"md:home",
        roomname:"소회의실1",
      },
      {
        id:2,
        name:"12:00 ~ 14:00",
        icon:"mdi-clock",
        roomname:"소회의실2"
      }
    ]
  }
])

const isLoading = ref<boolean>(false);
</script>
<template>
  <v-container>
    <CalendarComp :currentdate="curDate" :reslist="dateAttribute" @click-day="onDayClick"/>
    <ReservationComp :selectdate="curDate" :isloading="isLoading"/>
  </v-container>
</template>

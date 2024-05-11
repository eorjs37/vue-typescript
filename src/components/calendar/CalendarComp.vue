
<script lang="ts" setup>
import { toRef,ref } from "vue";
import type { CalendarDay,CalendarDate } from "@/interface/calendarday.interface";
/**
 * @description props 전달
 */
const props = defineProps({
  currentdate:{
    type:Date,
    required:false,
    default:new Date()
  }
})

const dayClick = (val:CalendarDay)=>{
  const { date } = val;
  curDate.value = date;
}

const currentDate = toRef(props,"currentdate");
const curDate = ref<Date>(new Date());
curDate.value = currentDate.value;

const dateAttribute = ref<CalendarDate[]>([
  {
    key: "meetingroom1",
    highlight: {
      color: "purple",
      fillMode: "light",
    },
    dates: new Date(),
  },
  {
    key:"meeingroom2",
    highlight: {
      color: "blue",
      fillMode: "light",
    },
    dates: new Date("2024-05-01"),
  },
  {
    key:"meeingroom3",
    highlight: {
      color: "blue",
      fillMode: "light",
    },
    dates: new Date("2024-05-20"),
  },
  {
    key:"meeingroom3",
    highlight: {
      color: "blue",
      fillMode: "light",
    },
    dates: new Date("2024-05-22"),
  }
])


</script>
<template>
  <h1>
    {{ curDate }}
  </h1>
  <VCalendar expanded :attributes="dateAttribute" @dayclick="dayClick"  mode="date"/>
</template>
<style scoped>
</style>
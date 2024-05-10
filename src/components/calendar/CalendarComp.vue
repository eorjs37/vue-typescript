
<script lang="ts" setup>
import { toRef,ref } from "vue";
import type { CalendarDay } from "@/interface/calendarday.interface";

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

const dateAttribute = ref([
  {
    key: "meetingroom1",
    highlight: "red",
    dates: new Date(),
  },
  {
    key:"meeingroom2",
    highlight: "red",
    dates: new Date("2024-05-11"),
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
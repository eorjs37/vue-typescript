
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
  },
  reslist:{
    type:Array<CalendarDate>,
    required:false,
    default:()=>{
      return []
    } 
  }
})

const emit =  defineEmits(["click-day"])

const dayClick = (val:CalendarDay)=>{
  const { date } = val;
  curDate.value = date;
  emit("click-day",val)
}

const currentDate = toRef(props,"currentdate");
const curDate = ref<Date>(new Date());
curDate.value = currentDate.value;



</script>
<template>
  <VCalendar expanded :attributes="reslist" @dayclick="dayClick"  mode="date"/>
</template>
<style scoped>
</style>
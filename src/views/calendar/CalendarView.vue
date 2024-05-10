<script lang="ts" setup>
import RegisterSchedule from "@/components/calendar/RegisterSchedule.vue";
import CalendarComp from "@/components/calendar/CalendarComp.vue";
import { reactive } from "vue";
const timeList = reactive<string[]>([
]);

const setTimeList = () =>{
  for(let i = 9 ; i < 21 ; i++){
    const hour = i > 9 ? i : `0${i}`;
    const time = hour + ":" + "00";
    timeList.push(time)
  }
}
setTimeList();
</script>
<template>
  <v-container>
    <CalendarComp/>
    <RegisterSchedule/>
  </v-container>
</template>

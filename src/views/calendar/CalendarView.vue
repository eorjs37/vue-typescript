<script lang="ts" setup>
import CalendarComp from "@/components/calendar/CalendarComp.vue";
import ReservationComp from "@/components/calendar/ReservationComp.vue";
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
    <ReservationComp/>
  </v-container>
</template>

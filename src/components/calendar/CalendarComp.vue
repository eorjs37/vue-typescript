<script setup lang="ts">
import { reactive } from "vue";
import VueCal from "vue-cal"
import "vue-cal/dist/vuecal.css"


interface SplitDays{
  id:number;
  class:string;
  label?:string;
}


const splitDays = reactive<SplitDays[]>([
  {
    id:1,
    class:"",
    label:"소회의실1"
  },
  {
    id:2,
    class:"",
    label:"소회의실2"
  },
  {
    id:2,
    class:"",
    label:"4층 회의실"
  }
]);


</script>
<template>
  <vue-cal
    active-view="week"
    :time-from="9 * 60"
    :time-step="30"
    :time-to="18 * 60"
    :split-days="splitDays"
    locale="ko"
    :disable-views="['years','year','day']"
  ></vue-cal>
</template>
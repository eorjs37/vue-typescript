<script lang="ts" setup>
import RegisterSchedule from "@/components/calendar/RegisterSchedule.vue";
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
    <v-table 
      density="compact"
      fixed-header>
      <thead>
        <tr>
          <th class="bg-grey-lighten-4 text-left font-weight-black width_10per border" rowspan="3">
            시간  
          </th>
          <th class="bg-grey-lighten-4 text-center font-weight-black width_90per border" colspan="3">
            회의실
          </th>
        </tr>
        <tr>
          <th class="bg-grey-lighten-4 text-center font-weight-black border width_33per" >소회의실1</th>
          <th class="bg-grey-lighten-4 text-center font-weight-black border width_33per">소회의실2</th>
          <th class="bg-grey-lighten-4 text-center font-weight-black border width_33per">4층</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in timeList" :key="`time${index}`">
          <td class="border">{{ item }}</td>
          <td class="border bg-red"></td>
          <td class="border bg-indigo-lighten-5"></td>
          <td class="border bg-blue-lighten-2"></td>
        </tr>
      </tbody>
    </v-table>
    <RegisterSchedule/>
  </v-container>
</template>

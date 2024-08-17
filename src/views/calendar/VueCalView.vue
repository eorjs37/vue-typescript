<template>
  <v-container>
    <div class="d-flex mb-5">
      <v-btn color="indigo" @click="openDialog">
        예약등록
      </v-btn>
    </div>
    <VueCalComp :eventsdata="eventsData" @change-view="onChangeView"/>
  </v-container>
</template>
<script lang="ts" setup>
interface Param{
  yyyymm:string
}
import VueCalComp from "@/components/calendar/VueCalComp.vue"
import type { Event } from "@/interface/calendarday.interface";
import { inject,ref } from "vue";
import { getMonthSchedule } from "@/api/meetingApi";
const dayjs = inject("dayjs");
const dayjsObject = new (dayjs as any)(new Date())



const eventsData = ref<Event[]>([]);

const setformatCalendar = async (yyyymm:string)=>{
  try {
    const { data }=  await getMonthSchedule(yyyymm);
    
    if(Array.isArray(data)){
      eventsData.value = []
      const len = data.length;
      for(let dataIndex = 0 ; dataIndex < len ; dataIndex++){
        const eventItem:Event ={
          start:`${data[dataIndex]["scheduleDate"]}  ${data[dataIndex]["scheduleStartTime"]}`,
          end:`${data[dataIndex]["scheduleDate"]}  ${data[dataIndex]["scheduleEndTime"]}`,
          title:"회의실",
          content:`
            <span class="meetingroom_icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 64h448v352h64V40c0-22.1-17.9-40-40-40H72C49.9 0 32 17.9 32 40v376h64V64zm528 384H480v-64H288v64H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"/></svg>
            </span>
          `,
          class:"meeting"
        }
        eventsData.value.push(eventItem);
      }
    }
    
  } catch (error) {
    console.error("setformatCalendar error  : ",error);
    
  }
}
const onChangeView = (val:Param) =>{
  setformatCalendar(val.yyyymm)
}
const openDialog = () =>{

}


const init = () => {
  setformatCalendar(yyyymm.value)
}

const yyyymm =  ref<string>(dayjsObject.getFormat("YYYY-MM"));

init();
</script>
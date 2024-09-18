<script lang="ts" setup>
import type { Event } from "@/interface/calendarday.interface";
import type { PropType } from "vue";
import VueCal from "vue-cal"
import type { EventReadyChanged, Event as Events } from "vue-cal.d";
import "vue-cal/dist/vuecal.css"
defineProps({
  eventsdata: Object as PropType<Event[]>
})

type EventClick = Event & Events;

const emits = defineEmits(["change-view","cell-click","evnet-click","ready-view"])

const viewChange = ($event:EventReadyChanged)=>{
  const { startDate,endDate,view } = $event;
  
  const year = startDate.getFullYear();
  const month = startDate.getMonth()+1 > 9 ? startDate.getMonth()+1 : `0${startDate.getMonth()+1}`;

  emits("change-view",{
    startDate,
    endDate,
    view,
    yyyymm:`${year}-${month}`
  })
}


const cellClick = ($event:Date) =>{
  emits("cell-click",{
    date:$event
  })
}

const onEventClick = (event:EventClick) =>{
  emits("evnet-click",event)
}

const onReady = (event:EventReadyChanged)=>{
  const {startDate,endDate } = event;
  emits("ready-view",{
    startDate,
    endDate
  })
}

</script>
<template>
  <vue-cal
    id="vuecal"
    :time-from="9 * 60"
    :time-to="23 * 60"
    :time-step="30"
    locale="ko"
    events-count-on-year-view
    class="vuecal--green-theme"
    :disable-views="['years','year','day']"
    :events="eventsdata"
    :on-event-click="onEventClick"
    @ready="onReady"
    @view-change="viewChange"
    @cell-click="cellClick"
  />
</template>
<style>
#vuecal .vuecal__cells.month-view .vuecal__cell{
  height: 60px;
}

.vuecal__event.meeting{
  background-color: rgba(253, 156, 66, 0.9);
  border: 1px solid rgb(233, 136, 46);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}

.meetingroom_icon{
  width: 15px;
  height: 15px;
  display: inline-block ;
}
.meetingroom_icon svg{
  fill: white;
}
</style>
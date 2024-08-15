<script lang="ts" setup>
import type { Event } from "@/interface/calendarday.interface";
import { ref } from "vue";
import type { PropType } from "vue";
import VueCal from "vue-cal"
import "vue-cal/dist/vuecal.css"


defineProps({
  eventsdata: Object as PropType<Event[]>
})

const events = ref<Event[] | null>([]);

events.value = [
  {
    start:"2024-08-15 10:00",
    end:"2024-08-15 10:30",
    title:"회의실1",
    content:`
    <span class="meetingroom_icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 64h448v352h64V40c0-22.1-17.9-40-40-40H72C49.9 0 32 17.9 32 40v376h64V64zm528 384H480v-64H288v64H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"/></svg>
    </span>
    `,
    class:"meeting"
  },
  {
    start:"2024-08-15 10:30",
    end:"2024-08-15 11:30",
    title:"회의실2",
    content:`
    <span class="meetingroom_icon">
      <svg class="meetingroom_icon_bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 64h448v352h64V40c0-22.1-17.9-40-40-40H72C49.9 0 32 17.9 32 40v376h64V64zm528 384H480v-64H288v64H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"/></svg>
    </span>
    `,
    class:"meeting"
  }
]

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
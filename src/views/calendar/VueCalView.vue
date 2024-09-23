<template>
  <v-container>
    <ConfirmModal :modaltitle="'삭제'" :modalcontents="'삭제 하시겠습니까?'" :dialog="confirmModal" @cancel-click="onCancelClick" @confirm-click="onConfirmClick"/>
    <div class="d-flex mb-5">
      <v-btn color="indigo" @click="openDialog">
        예약등록
      </v-btn>
    </div>
    <VueCalComp :eventsdata="eventsData" @evnet-click="onEventClick" @ready-view="onReadyView" @change-view="onChangeView" @cell-click="onCellClick"/>
    <ManageSchedule :propsevent="selectEvent" :id="scheduleId" :dialog="dialog" :selectdate="currentDate" @close-schedulemodal="onCloseScheduleModal" @save-schedule="onSaveSchedule" @delete-schedule="onDeleteSchedule"/>
    <v-snackbar  :timeout="1000"
                 color="primary"
                 :model-value="isOpenSnackBar"
                 variant="tonal">
      {{  snackbarText }}
    </v-snackbar>
  </v-container>
</template>
<script lang="ts" setup>
import VueCalComp from "@/components/calendar/VueCalComp.vue"
import ManageSchedule from "@/components/calendar/ManageSchedule.vue";
import ConfirmModal from "@/components/common/ConfirmModal.vue";
import type { Event } from "@/interface/calendarday.interface";
import type { Event as Events } from "vue-cal.d";
import { ref } from "vue";
import { getWeekSchedule } from "@/api/meetingApi";
import type { SaveSchedule } from "@/interface/schedule.interface";
import { deleteScheduleId, saveSchedule, updateSchedule } from "@/api/scheduleApi";
import dayjs from "dayjs";
type EventClick = Event & Events;

interface Param{
  yyyymm:string,
  startDate:Date,
  endDate:Date,
  view:string
}

interface ReadyView{
  startDate:Date,
  endDate:Date
}

interface CellClickParam{
  date:Date;
}

const eventsData = ref<Event[]>([]);
const scheduleId = ref<number>(-1);
const selectEvent = ref<EventClick | null>(null);
const isOpenSnackBar = ref<boolean>(false);
const snackbarText = ref<string>("저장 되었습니다");

const clearOpenSnackBar = ()=>{
  setTimeout(() => {
    if(isOpenSnackBar.value){
      isOpenSnackBar.value = false; 
    }
  }, 1000);  
}


const setFormatCal = async (startDate:string,endDate:string)=>{
  try {
    const { status,data } = await getWeekSchedule(startDate,endDate)
    if(status === 200){  
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
            class:"meeting",
            id:data[dataIndex]["id"]
          }
          eventsData.value.push(eventItem);
        }
      }
    }else{
      throw Error("Error")
    }
  } catch (error) {
    if(error){
      alert("Error")
    }
  }
}

const onChangeView = (val:Param) =>{
  startDate.value = dayjs(val.startDate).format("YYYY-MM-DD")
  endDate.value = dayjs(val.endDate).format("YYYY-MM-DD");
  setFormatCal(startDate.value,endDate.value)
}

const onCloseScheduleModal = ()=>{
  dialog.value = false;
  selectEvent.value = null
  scheduleId.value = -1
}

const onDeleteSchedule = ()=>{
  confirmModal.value = true;
}

const onCancelClick = ()=>{
  confirmModal.value = false
}

const onConfirmClick = async ()=>{
  try {
    const { status} =  await deleteScheduleId(scheduleId.value)
    if(status === 200){
      //
      confirmModal.value = false
      dialog.value = false;
      clearOpenSnackBar();
      setFormatCal(startDate.value,endDate.value)
      snackbarText.value = "삭제되었습니다"
      isOpenSnackBar.value = true
    }else{
      throw Error("Error")
    }
  } catch (error) {
    //
    if(error){
      alert("Error")
    }
  }
}

const onSaveSchedule = async (item:SaveSchedule | undefined)=>{
  if(item){
    if(item.id === -1){
      try {
        const { status } = await saveSchedule(item);
        if(status === 200){
          snackbarText.value = "저장 되었습니다"
          clearOpenSnackBar();
          isOpenSnackBar.value = true;
          dialog.value  =false;
        }
   
      } catch (error) {
        if(error){
          alert("Error")
        }
      }finally{
        setFormatCal(startDate.value,endDate.value)
      }
    }else{
      try {
        const { status } = await updateSchedule(item);
        if(status === 200){
          snackbarText.value = "저장 되었습니다"
          clearOpenSnackBar();
          isOpenSnackBar.value = true;
          dialog.value = false
        }else{
          throw Error("Error")
        }
      }catch(error){
        if(error){
          alert("Error")
        }
      }finally{
        setFormatCal(startDate.value,endDate.value)
      } 
    } 
  }
  
}

const dialog = ref<boolean>(false);
const openDialog = () =>{
  dialog.value = true;
}

const currentDate = ref<Date>(new Date());

const onCellClick = (cellParam:CellClickParam) =>{
  currentDate.value = cellParam.date;
}

const onEventClick = (event:null | EventClick | undefined) =>{
  dialog.value = true;
  if(event){
    currentDate.value = typeof event.start === "object" ? event.start : new Date();
    selectEvent.value = event
    if(event.id){
      scheduleId.value = event.id;
    }
    
  }
}

const onReadyView = (val:ReadyView)=>{
  startDate.value = dayjs(val.startDate).format("YYYY-MM-DD")
  endDate.value = dayjs(val.endDate).format("YYYY-MM-DD");
  setFormatCal(startDate.value,endDate.value)
}


const startDate = ref<string>("");
const endDate = ref<string>("");
const confirmModal = ref<boolean>(false);

</script>
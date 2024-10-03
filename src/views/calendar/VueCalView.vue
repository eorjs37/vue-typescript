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

/**
 * @description 스낵바 1초후 종료
 * @author CHOI DAE GEON
 */
const clearOpenSnackBar = ()=>{
  setTimeout(() => {
    if(isOpenSnackBar.value){
      isOpenSnackBar.value = false; 
    }
  }, 1000);  
}

/**
 * @description vue-cal 포멧 세팅
 * @author CHOI DAE GEON
 */
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

/**
 * @description vue-cal 변화 감지
 * @param val Param
 * @author CHOI DAE GEON
 */
const onChangeView = (val:Param) =>{
  startDate.value = dayjs(val.startDate).format("YYYY-MM-DD")
  endDate.value = dayjs(val.endDate).format("YYYY-MM-DD");
  setFormatCal(startDate.value,endDate.value)
}

/**
 * @description 스케줄모달 종료
 * @author CHOI DAE GEON
 */
const onCloseScheduleModal = ()=>{
  dialog.value = false;
  selectEvent.value = null
  scheduleId.value = -1
}

/**
 * @description 스케줄 삭제
 * @author CHOI DAE GEON
 */
const onDeleteSchedule = ()=>{
  confirmModal.value = true;
}
/**
 * @description 예/아니오 모달 닫기
 * @author CHOI DAE GEON
 */
const onCancelClick = ()=>{
  confirmModal.value = false
}

/**
 * @description 예/아니오 모달 "예"클릭
 * @author CHOI DAE GEON
 */
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

/**
 * @description 스케줄 등록
 * @param item SaveSchedule | undefined
 * @author CHOI DAE GEON
 */
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

/**
 * @description 스케줄등록 팝업 오픈
 * @author CHOI DAE GEON
 */
const openDialog = () =>{
  dialog.value = true;
}

const currentDate = ref<Date>(new Date());

/**
 * @description vue-cal cell click
 * @author CHOI DAE GEON
 */
const onCellClick = (cellParam:CellClickParam) =>{
  currentDate.value = cellParam.date;
}

/**
 * @description 이벤트 상세 클릭
 * @param event null | EventClick | undefined
 * @author CHOI DAE GEON
 */
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

/**
 * @description vue-cal ready event
 * @param val ReadyView
 * @author CHOI DAE GEON
 */
const onReadyView = (val:ReadyView)=>{
  startDate.value = dayjs(val.startDate).format("YYYY-MM-DD")
  endDate.value = dayjs(val.endDate).format("YYYY-MM-DD");
  setFormatCal(startDate.value,endDate.value)
}


const startDate = ref<string>("");
const endDate = ref<string>("");
const confirmModal = ref<boolean>(false);

</script>
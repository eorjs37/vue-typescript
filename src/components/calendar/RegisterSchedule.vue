
<script setup lang="ts">
import { ref, toRef, watch} from "vue";
import type { RegisterItem } from "@/interface/reservation.interface";

interface ValidateItem{
  title:string;
  value:string
}

const props = defineProps({
  dialog:{
    type:Boolean,
    required:false,
    default:false
  },
  selectdate:{
    type:Date,
    required:false,
    default:new Date()
  },
  registeritem:{
    type:Object as () => RegisterItem | null,
    required:false,
    default:()=>{
      return {
        id:-1
      }
    }
  }
})
const emits = defineEmits(["close-dialog","save-schedule","update-schedule"])

const dialog = toRef(props,"dialog");
const id = ref<number>(-1);
const timeList = ref<ValidateItem[]>([]);
const minList = ref<ValidateItem[]>([]);
const roomCode = ref<string>("");
const startHour = ref<string>("");
const startMin  = ref<string>("");
const endHour = ref<string>("");
const endMin  = ref<string>("");


watch(dialog,(val)=>{
  if(val){
    if(props.registeritem && Object.keys(props.registeritem).length > 0){
      const{ id:roomid,meetingRoomCode ,scheduleStartTime, scheduleEndTime } = props.registeritem;
      roomCode.value = meetingRoomCode ? meetingRoomCode : "";
      if(scheduleStartTime){
        const splitStartTime = scheduleStartTime.split(":");
      
        const stHour = splitStartTime[0];
        const stMin = splitStartTime[1];
        startHour.value = stHour;
        startMin.value = stMin;
      }

      if(scheduleEndTime){
        const splitEndTime = scheduleEndTime.split(":");
        const edHour = splitEndTime[0];
        const edMin  = splitEndTime[1];
    
        endHour.value = edHour;
        endMin.value = edMin;
      }
    
    
    
      id.value = roomid ? roomid : -1;
    }
    
  }
})

for(let  i = 0 ; i < 24 ; i++){
  const times = i > 9 ? String(i) : `0${i}`
  const time ={
    title:times,
    value:times
  }
  timeList.value.push(time);
}

timeList.value = [{title:"선택",value:""},...timeList.value]

for(let  i = 0 ; i < 60 ; i+=10){
  const mins = i > 9 ? String(i) : `0${i}`
  const min ={
    title:mins,
    value:mins
  }
  minList.value.push(min);
}
minList.value = [{title:"선택",value:""},...minList.value]
/**
 * @description 스케줄 등록
 */
const saveSchedule = ()=>{
  try {
    validate([
      {
        title:"시작시간",
        value:startHour.value
      },
      {
        title:"시작분",
        value:startMin.value
      },
      {
        title:"종료시간",
        value:endHour.value
      },
      {
        title:"종료분",
        value:endMin.value
      }
    ]);

    const yyyy = props.selectdate.getFullYear();
    const mm = props.selectdate.getMonth()+1 > 9 ? props.selectdate.getMonth()+1 : `0${props.selectdate.getMonth()+1}`;
    const dd = props.selectdate.getDate() > 9 ?  props.selectdate.getDate() : `0${props.selectdate.getDate()}`;


    if(props.registeritem && props.registeritem.datatype === 1){
      emits("save-schedule",{
        scheduleDate:`${yyyy}-${mm}-${dd}`,
        scheduleStartTime:`${startHour.value}:${startMin.value}`,
        scheduleEndTime:`${endHour.value}:${endMin.value}`,
        meetingRoomCode:`${roomCode.value}`
      });  
    }else{
      emits("update-schedule",{
        id:id.value,
        scheduleDate:`${yyyy}-${mm}-${dd}`,
        scheduleStartTime:`${startHour.value}:${startMin.value}`,
        scheduleEndTime:`${endHour.value}:${endMin.value}`,
        meetingRoomCode:`${roomCode.value}`
      })
    }
   
  } catch (error:any) {
    alert(error.message)
  }
  
}

/**
 * @description 벨리데이션 검증
 * @param validateList 벨리데이션 리스트
 */
const validate = (validateList:ValidateItem[]) =>{
  validateList.forEach(validateItem=>{
    const { value,title } = validateItem;
    if(!value){
      throw Error(`${title}은 필수 값입니다`)
    }
  })
}

/**
 * @description 회의실값 업데이트
 */
const roomUpdateMenu = (val:string)=>{
  roomCode.value = val;
}

/**
 * @description 다이얼로그 Leave 이벤트
 */
const onAfterLeave =  ()=>{
  roomCode.value = "";
  startHour.value = "";
  startMin.value = "";
  endHour.value = ""
  endMin.value =""
}


</script>
<template>
  <v-dialog max-width="600" :model-value="dialog" persistent @afterLeave="onAfterLeave">
    <v-card title="예약등록">
      <template v-slot:text>
        <div class="d-flex flex-column">
          <v-select
            clearable
            label="회의실선택"
            variant="outlined"
            :model-value="roomCode"
            @update:modelValue="roomUpdateMenu"
            :items="[{title:'-선택-',value:''},{title:'소회의실1',value:'A0001'},{title:'소회의실2',value:'A0002'},{title:'4층',value:'A0003'}]"
          ></v-select>
          <h6 class="text-h6">시작시간</h6>
          <div class="d-flex">
            <v-select
              clearable
              label="시간"
              variant="outlined"
              :model-value="startHour"
              @update:modelValue="(val:string)=> startHour = val"
              :items="timeList"
            ></v-select>
            <v-select
              clearable
              label="분"
              :model-value="startMin"
              @update:modelValue="(val:string)=> startMin = val"
              variant="outlined"
              :items="minList"
            ></v-select>
          </div>
          <h6 class="text-h6">종료시간</h6>
          <div class="d-flex">
            <v-select
              clearable
              label="시간"
              variant="outlined"
              :model-value="endHour"
              @update:modelValue="(val:string)=> endHour = val"
              :items="timeList"
            ></v-select>
            <v-select
              clearable
              label="분"
              variant="outlined"
              :model-value="endMin"
              @update:modelValue="(val:string)=> endMin = val"
              :items="minList"
            ></v-select>
          </div>
         
        </div>
      </template>
      <template v-slot:actions>
        <v-spacer></v-spacer>
        <v-btn @click="$emit('close-dialog')">
          닫기
        </v-btn>
        <v-btn @click="saveSchedule">
          등록
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
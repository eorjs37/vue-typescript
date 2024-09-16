<script setup lang="ts">
import { ref,inject, computed,watch, toRef } from "vue";
import { formatCalendarDate } from "@/utils/utils";
import type { Event } from "@/interface/calendarday.interface";
import type { Event as Events } from "vue-cal.d";
import type { SaveSchedule } from "@/interface/schedule.interface";
const dayjs = inject("dayjs");
let dayjsObject = new (dayjs as any)(props.selectdate)
type EventClick = Event & Events;
interface ValidateItem{
  title:string;
  value:string
}

const props = defineProps({
  id:{
    type:Number,
    required:false,
    default:-1
  },
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
  propsevent: Object as PropType<EventClick>
})
const dialog = toRef(props,"dialog");


const yyyyMmDd:string = computed(()=>{
  return dayjsObject.getFormat("YYYY-MM-DD",props.selectdate.toDateString())
})


const emit = defineEmits(["close-schedulemodal","save-schedule"])


const timeList = ref<ValidateItem[]>([]);
const minList = ref<ValidateItem[]>([]);
const startHour = ref<string>("");
const startMin  = ref<string>("");
const endHour = ref<string>("");
const endMin  = ref<string>("");
for(let  i = 9 ; i < 23 ; i++){
  const times = i > 9 ? String(i) : `0${i}`
  const time ={
    title:times,
    value:times
  }
  timeList.value.push(time);
}
timeList.value = [{title:"선택",value:""},...timeList.value]
minList.value = [{title:"선택",value:""},{title:"00",value:"00"},{title:"30",value:"30"}]

/**
 * @description 다이얼로그 Leave 이벤트
 */
const onAfterLeave =  ()=>{
  startHour.value = "";
  startMin.value="";
  endHour.value="";
  endMin.value="";
  emit("close-schedulemodal")
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
    const item:SaveSchedule = {
      scheduleDate:dayjsObject.getFormat("YYYY-MM-DD",props.selectdate.toDateString()),
      scheduleStartTime:`${startHour.value}:${startMin.value}`,
      scheduleEndTime:`${endHour.value}:${endMin.value}`,
      id:props.id
    }
    emit("save-schedule",item);
  } catch (error:any) {
    alert(error.message)
  }
}

watch(dialog,(val)=>{
  if(val){
    dayjsObject = new (dayjs as any)(props.selectdate)
    if(props.propsevent){
      const { startTimeMinutes,endTimeMinutes} = props.propsevent
      const result =  formatCalendarDate(startTimeMinutes,endTimeMinutes)
      
      startHour.value = result.startHour
      startMin.value = result.startMin
      endHour.value = result.endHour
      endMin.value = result.endMin
    }else{
      startHour.value = "";
      startMin.value = "";
      endHour.value = "";
      endMin.value = ""
    }
    
  }
})
</script>
<template>
  <v-dialog max-width="600" :model-value="dialog"  @afterLeave="onAfterLeave">
    <v-card :title="`예약관리 ${yyyyMmDd}`">
      <template v-slot:text>
        <div class="d-flex flex-column">
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
        <v-btn @click="$emit('close-schedulemodal')">
          닫기
        </v-btn>
        <v-btn @click="saveSchedule">
          등록
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
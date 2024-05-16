
<script setup lang="ts">
import { ref, toRef } from "vue";


const props = defineProps({
  dialog:{
    type:Boolean,
    required:false,
    default:false
  }
})

const timeList = ref<string[]>([]);
const minList = ref<string[]>([]);

for(let  i = 0 ; i < 24 ; i++){
  timeList.value.push(i > 9 ? String(i) : `0${i}`);
}

for(let  i = 0 ; i < 60 ; i+=10){
  minList.value.push(i > 9 ? String(i) : `0${i}`);
}

defineEmits(["close-dialog"])

const dialog = toRef(props,"dialog");
</script>
<template>
  <v-dialog max-width="600" :model-value="dialog" persistent>
    <v-card title="예약등록">
      <template v-slot:text>
        <div class="d-flex flex-column">
          <v-select
            clearable
            label="회의실선택"
            variant="outlined"
            :items="[{title:'소회의실1',value:'A0001'},{title:'소회의실2',value:'A0002'},{title:'4층',value:'A0003'}]"
          ></v-select>
          <h6 class="text-h6">시작시간</h6>
          <div class="d-flex">
            <v-select
              clearable
              label="시간"
              variant="outlined"
              :items="timeList"
            ></v-select>
            <v-select
              clearable
              label="분"
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
              :items="timeList"
            ></v-select>
            <v-select
              clearable
              label="분"
              variant="outlined"
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
      </template>
    </v-card>
  </v-dialog>
</template>
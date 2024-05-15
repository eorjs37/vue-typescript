
<script setup lang="ts">
import { toRef } from "vue";
const props = defineProps({
  dialog:{
    type:Boolean,
    required:false,
    default:false
  }
})

defineEmits(["close-dialog"])

const dialog = toRef(props,"dialog");
</script>
<template>
  <v-dialog max-width="500" :model-value="dialog" persistent>
    <v-card title="예약등록">
      <template v-slot:text>
        <div class="d-flex flex-column">
          <v-select
            clearable
            label="Select"
            variant="outlined"
            :items="[{title:'소회의실1',value:'A0001'},{title:'소회의실2',value:'A0002'},{title:'4층',value:'A0003'}]"
          ></v-select>
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
<template>
  <v-dialog max-width="400" :model-value="dialog" persistent>
    <v-card :title="modaltitle">
      <template v-slot:text>
        <p v-html="modalcontents"></p>
      </template>
      <template v-slot:actions>
        <v-spacer></v-spacer>
        <v-btn @click="emit('cancel-click')">
          취소
        </v-btn>
        <v-btn @click="emit('confirm-click')">
          삭제
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { toRef } from "vue";
const props =  defineProps({
  dialog:{
    type:Boolean,
    required:false,
    default:false
  },
  modaltitle:{
    type:String,
    required:false,
    default:""
  },
  modalcontents:{
    type:String,
    required:false,
    default:""
  }
})

const emit =  defineEmits(["cancel-click","confirm-click"])

const dialog = toRef(props,"dialog");
</script>
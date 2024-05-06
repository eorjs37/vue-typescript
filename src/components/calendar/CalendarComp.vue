
<script lang="ts" setup>
import { toRef,ref } from "vue";

const props = defineProps({
  currentdate:{
    type:Date,
    required:false,
    default:new Date()
  }
})

const currentDate = toRef(props,"currentdate");
</script>
<template>
  <h1>
    {{ currentDate }}
  </h1>
  <VDatePicker expanded v-model="currentDate" mode="date"/>
</template>
<style scoped>
</style>
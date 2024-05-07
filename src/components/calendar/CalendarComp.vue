
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
const curDate = ref<Date>(new Date());
curDate.value = currentDate.value;
</script>
<template>
  <h1>
    {{ curDate }}
  </h1>
  <VDatePicker expanded v-model="curDate" mode="date"/>
</template>
<style scoped>
</style>
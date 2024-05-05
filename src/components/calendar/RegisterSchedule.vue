
<script setup lang="ts">

defineProps({
  dialog:{
    type:Boolean,
    required:false,
    default:true
  }
})


</script>
<template>
  <v-dialog max-width="240" >
    <v-card title="Dialog 2">
      <template v-slot:text></template>
    </v-card>
  </v-dialog>
</template>
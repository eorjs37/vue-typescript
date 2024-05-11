
<script setup lang="ts">
import { ref } from "vue";


interface ListItem {
  name:string;
  id:number,
  icon?:string
}

const list = ref<ListItem[]>([
  {
    id:1,
    name:"10:00 ~ 12:00",
    icon:"md:home"
  },
  {
    id:2,
    name:"12:00 ~ 14:00",
    icon:"mdi-clock"
  }
])
</script>
<template>
  <v-icon icon="mdi:home"></v-icon>
  <v-card class="mt-5">
    <v-list>
      <v-list-subheader>예약현황</v-list-subheader>
      <v-list-item v-for="(item,index) in list" :key="index"
                   :value="item">
        <template v-slot:prepend>
          <v-icon icon="md:home"></v-icon>
        </template>           
        <v-list-item-title>
          {{ item.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>
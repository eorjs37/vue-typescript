
<script setup lang="ts">

interface ListItem {
  name:string;
  id:number,
  icon?:string,
  roomname:string,
  date?:Date
}


defineProps({
  isloading:{
    type:Boolean,
    required:false,
    default:false
  },
  selectdate:{
    type:Date,
    required:false,
    default:new Date()
  },
  dayreservationlist:{
    type:Array<ListItem>,
    required:false,
    default:()=>{
      return [
      ]
    }
  }
});
</script>
<template>
  <div v-if="isloading" class="mt-5 text-center">
    <v-progress-circular
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
  
  <v-card v-else class="mt-5">
    <v-list v-if="dayreservationlist.length > 0">
      <v-list-subheader class="font-weight-black">예약현황 {{ selectdate.toDateString() }}</v-list-subheader>
      <v-list-item v-for="(item,index) in dayreservationlist" :key="index" 
                   :value="item">
        <template v-slot:prepend>
          <v-icon icon="mdi-information" class="mr-3"></v-icon>
        </template>           
        <v-list-item-title>
          {{ item.name }} / {{ item.roomname }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <v-list v-else>
      <v-list-subheader class="font-weight-black">예약현황 {{ selectdate.toDateString() }}</v-list-subheader>
      <v-list-item>
        <v-list-item-title class="text-center">
          예약이 존재하지 않습니다.
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>
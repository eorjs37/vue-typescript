<template>
  <v-btn @click="controlVideo">
    {{ videoStatus ? '중지' : '재생' }}
  </v-btn>
  <video id="streamingvideo" hidden></video>
</template>
<script setup lang="ts">
import Hls from "hls.js";
import { computed, onMounted, ref } from "vue";

const hls = ref<any>(null);
const video = ref<any>(null);
const videoPlayStatus = ref<boolean>(false);
const src =
  "https://daegeon-everybody.s3.ap-northeast-2.amazonaws.com/m3u8/lauv/music.m3u8";

const setVideoInit = () =>{
  if(Hls.isSupported()){
    hls.value = new Hls({
      autoStartLoad:false
    })
    hls.value.loadSource(src);
    hls.value.attachMedia(video.value);
    hls.value.startLoad(-1);
  }
}

const setVideo = ()=>{
  video.value = document.querySelector("#streamingvideo");
}

const controlVideo = async ()=>{
  const paused = video.value.paused;
  if(paused){
    await video.value.play();
    setVieoStatus(true);
  }else{
    video.value.pause();
    setVieoStatus(false);
  }
}

const setVieoStatus = (val:boolean)=>{
  videoPlayStatus.value = val
}

const videoStatus = computed(() =>{
  return videoPlayStatus.value;
})

onMounted(()=>{
  setVideo();
  setVideoInit();
  controlVideo();
})
</script>

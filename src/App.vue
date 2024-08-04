<script setup lang="ts">
import { RouterView } from "vue-router";
import { onMounted, ref } from "vue";
import { getBlogList } from "./api/blogApi";
import SockJs from "sockjs-client";
import * as firebaseApp from "firebase/app";
import * as firebassMessage from "firebase/messaging"


// VAPID_PUBLIC_KEY
const VAPID_PUBLIC_KEY:string = "BAMSegYiIZvlHZD_YLRsK9ILwwRhDKA893tj7KDg90kAiPjrulcJD2hY3WLkNfgGVLGUzmUC8IpjYMURCZ8MC70"

// firebaseApp init
firebaseApp.initializeApp(
  {
    apiKey: "AIzaSyBaXYPHexb32vmjW-Xj-N2oIn4N4TClBz4",
    authDomain: "webpush-a5e3f.firebaseapp.com",
    projectId: "webpush-a5e3f",
    storageBucket: "webpush-a5e3f.appspot.com",
    messagingSenderId: "180140771495",
    appId: "1:180140771495:web:465246b4183bd23f6b3382",
    measurementId: "G-Y3BB9P587V"
  }
)

const messaging = firebassMessage.getMessaging();
firebassMessage.getToken(messaging,{
  vapidKey:VAPID_PUBLIC_KEY
})
  .then(currentToken=>{
    if(currentToken){
      console.log(currentToken);
    }
  })
  .catch((err)=>{
    console.error("getToken error : ",err);
  
  })




interface Blog {
  title: string;
  contents: string;
}

const sock = () => {
  new SockJs("https://biggunsite.co.kr/ws/chat");
};

sock();

onMounted(() => {
  const list = ref<Blog>({ title: "", contents: "" });

  getBlogList().then((res) => {
    list.value = res.data[0];
  });
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>

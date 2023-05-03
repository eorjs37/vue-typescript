<template>
   <header @keydown.esc="isOpenSideBar">
      <div class="head-container">
         <input type="checkbox" hidden id="hambuger" v-model="sideBarChecked" />
         <label class="hambuger" for="hambuger" @click="isOpenSideBar">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
         </label>
         <nav>
            <a>로그인</a>
            <a>회원가입</a>
         </nav>
      </div>
   </header>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';
const sideBarEle: Ref<Element | null> = ref(null);
const sideBarChecked: Ref<boolean> = ref(false);

const setSideBarEle = () => {
   sideBarEle.value = document.querySelector('#sidebar');
};

const hacOpenClass = (): boolean => {
   const hasClose = sideBarEle.value?.classList.contains('is-open');

   return hasClose ? true : false;
};

const isOpenSideBar = () => {
   if (hacOpenClass()) {
      closeSideBar();
   } else {
      openSideBar();
   }
};

const addEscEvent = () => {
   window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && hacOpenClass()) {
         closeSideBar();
         sideBarChecked.value = false;
      }
   });
};

const addClickEvent = () => {
   window.addEventListener('click', (event: MouseEvent) => {
      if ((event.target as Element).id !== 'side-bar-left' && sideBarChecked.value) {
         closeSideBar();
         sideBarChecked.value = false;
      }
   });
};

const openSideBar = () => {
   sideBarEle.value?.classList.add('is-open');
};
const closeSideBar = () => {
   sideBarEle.value?.classList.remove('is-open');
};

onMounted(() => {
   setSideBarEle();
   addClickEvent();
   addEscEvent();
});

//test code에서 확인이 가능하도록 하기 위해
defineExpose({
   setSideBarEle,
   addClickEvent,
   addEscEvent,
   hacOpenClass,
   sideBarEle
});
</script>

<style scoped>
@import '../assets/_variables.css';
header {
   height: 50px;
   width: 100%;
   background-color: var(--blue);
}
.head-container {
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 100%;
}

.hambuger {
   display: inline-block;
   position: relative;
   width: 30px;
   height: 30px;
   cursor: pointer;
   margin-left: 10px;
}

input[type='checkbox']:checked ~ .hambuger > .line:nth-child(1) {
   transform: rotate(45deg);
   top: 15px;
}

input[type='checkbox']:checked ~ .hambuger > .line:nth-child(2) {
   display: none;
}
input[type='checkbox']:checked ~ .hambuger > .line:nth-child(3) {
   transform: rotate(-45deg);
   top: 15px;
}

.hambuger > .line {
   display: inline-block;
   position: absolute;
   width: 100%;
   height: 4px;
   border-radius: 10px;
   background: var(--white);
   transition: 0.25s ease-in-out;
}

.hambuger > .line:nth-child(1) {
   top: 0;
}

.hambuger > .line:nth-child(2) {
   top: 13px;
}

.hambuger > .line:nth-child(3) {
   top: 26px;
}

nav > a {
   margin-right: 10px;
   color: var(--white);
   font-weight: bold;
   cursor: pointer;
}
</style>

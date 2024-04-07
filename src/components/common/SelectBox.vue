<template>
   <ul class="selectbox_wrap">
      <li class="selectbox_selected" @click="isActiveList = !isActiveList">
         <span>-선택-</span>
         <img :src="`/images/${arrowIcon}`" class="arrow_icon" alt="arrow_icon" />
      </li>
      <Transition name="list_animation">
         <li class="selectbox_list" v-if="isActiveList">
            <ul class="selectbox_list_wrap">
               <li class="selectbox_list_item">-선택-</li>
               <li class="selectbox_list_item">집앞에 남겨주세요</li>
               <li class="selectbox_list_item">미리 전화주세요</li>
            </ul>
         </li>
      </Transition>
   </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isActiveList = ref<boolean>(false);
const arrowIcon = ref<string>('arrow_icon.png');
</script>
<style scoped>
.selectbox_wrap {
   display: inline-block;
   width: 100%;
   position: relative;
}
.selectbox_selected {
   width: 100%;
   line-height: 1;
   box-sizing: border-box;
   border: 1px solid var(--E0E0E0);
   padding: 10px;
   cursor: pointer;
   height: 38px;
   display: flex;
   justify-content: space-between;
}

.selectbox_list {
   position: absolute;
   top: 40px;
   left: 0;
   height: auto;
   overflow-y: hidden;
   width: 100%;
   overflow-x: hidden;
}

.selectbox_list_wrap {
   display: flex;
   flex-direction: column;
   border: 1px solid var(--041643);
}

.selectbox_list_item {
   line-height: 1.8;
   cursor: pointer;
}

.selectbox_list_item:hover {
   background-color: var(--FFFCFC);
}

.arrow_icon {
   transform: rotate(90deg);
}

.list_animation-enter-active {
   animation: list_down linear 0.1s;
}

.list_animation-leave-active {
   animation: list_up linear 0.1s;
}

@keyframes list_down {
   0% {
      height: 0;
   }
   50% {
      height: 50%;
   }
   100% {
      height: 100%;
   }
}

@keyframes list_up {
   0% {
      height: 100%;
   }
   50% {
      height: 50%;
   }
   100% {
      height: 0%;
   }
}
</style>

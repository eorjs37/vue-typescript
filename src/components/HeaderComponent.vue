<template>
   <header>
      <div class="head-container">
         <input type="checkbox" hidden id="hambuger" />
         <label class="hambuger" for="hambuger">
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
import { onMounted } from 'vue';

onMounted(() => {});
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

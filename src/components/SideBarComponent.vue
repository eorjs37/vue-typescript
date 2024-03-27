<template>
   <div id="sidebar" class="overlay">
      <nav id="side-bar-left" class="side-bar-left">
         <ul class="list">
            <li class="list-item" @click="move('/blog-write')">글쓰기</li>
            <li class="list-item">
               <span @click="move('/blog-list?type=all')">글 목록(55)</span>
            </li>
         </ul>
      </nav>
   </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const move = (path: string): void => {
   router.push(path);
};

defineExpose({
   move
});
</script>

<style scoped>
.overlay {
   position: fixed;
   top: 0;
   left: 0;
   z-index: 2;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.7);
   opacity: 0;
   visibility: hidden;
   transition: 0.3s linear;
}

.overlay.is-open {
   opacity: 1;
   visibility: visible;
}

.side-bar-left {
   position: fixed;
   top: 0;
   left: 0;
   width: 200px;
   height: 100%;
   background-color: #ffffff;
}

.list {
   display: flex;
   flex-direction: column;
   padding: 20px;
}

.sub-list {
   padding: 10px;
}

.list-item {
   padding: 10px;
   cursor: pointer;
}

.sub-list-item {
   padding: 5px;
}

.no-cursor {
   cursor: default;
}
</style>

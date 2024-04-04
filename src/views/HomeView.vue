<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const move = (pagename: string) => {
   router.push({
      name: pagename
   });
};
</script>

<template>
   <ul class="container page_list">
      <li @click="move('blog-write')"><a class="anchor">글쓰기</a></li>
      <li class="page_item"><a class="anchor">페이지2</a></li>
      <li class="page_item"><a class="anchor">페이지3</a></li>
   </ul>
</template>

<style scoped>
.container {
   max-width: 1200px;
   width: 100%;
   margin: 0 auto;
}

.page_list {
   display: flex;
}

.page_item {
   margin-left: 5px;
}

.anchor {
   padding: 10px;
   background-color: var(--blue);
   color: var(--white);
   line-height: 1;
   display: flex;
   align-items: center;
   box-sizing: border-box;
   cursor: pointer;
}
</style>

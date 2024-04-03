<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getBlogList } from './api/blogApi';

interface Blog {
   title: string;
   contents: string;
}

onMounted(() => {
   const list = ref<Blog>({ title: '', contents: '' });

   console.log('onMounted');
   getBlogList().then((res) => {
      list.value = res.data[0];
   });
});
</script>

<template>
   <RouterView />
</template>

<style scoped></style>

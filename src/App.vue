<script setup lang="ts">
import { RouterView } from "vue-router";
import { onMounted, ref } from "vue";
import { getBlogList } from "./api/blogApi";
import SockJs from "sockjs-client";
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

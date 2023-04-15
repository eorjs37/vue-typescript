<script setup lang="ts">
import { ref } from 'vue';

const message = ref('안녕하세요');

const changeMessagee = () => {
   message.value = '변경되었습니다.';
};
</script>

<template>
   <main>
      <span v-once>
         {{ message }}
      </span>
      <span>
         {{ message }}
      </span>
      <button @click="changeMessagee">메세지 변경</button>
   </main>
</template>

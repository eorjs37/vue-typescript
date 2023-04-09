<template>
  <header>
    <div class="head-container">
      <div class="hambuger">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <nav>
        <a>로그인</a>
        <a>회원가입</a>
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps({
  foo: { type: String, required: false },
  bar: Number
});

onMounted(() => {
  console.log(props);
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
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-left: 10px;
}

.hambuger > .line {
  display: inline-block;
  width: 100%;
  height: 5px;
  border-radius: 10px;
  background: var(--white);
}

nav > a {
  margin-right: 10px;
  color: var(--white);
  font-weight: bold;
  cursor: pointer;
}
</style>

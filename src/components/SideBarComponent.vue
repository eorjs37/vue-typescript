<template>
   <div id="sidebar" class="overlay">
      <nav id="side-bar-left" class="side-bar-left"></nav>
   </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {});
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
</style>

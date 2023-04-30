<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
   <HeaderComponent></HeaderComponent>
   <SideBarComponent></SideBarComponent>
   <div class="container">
      <main>
         <RouterView />
      </main>
   </div>
</template>

<style scoped>
.container {
   max-width: 1200px;
   width: 100%;
   margin: 0 auto;
}
</style>

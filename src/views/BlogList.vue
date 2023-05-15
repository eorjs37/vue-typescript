<template>
   <LoadingComponent v-if="!loading"></LoadingComponent>
   <ul class="card-list" v-else>
      <li class="card-list-item">
         <CardComponent></CardComponent>
      </li>
      <li class="card-list-item">
         <CardComponent></CardComponent>
      </li>
      <li class="card-list-item">
         <CardComponent></CardComponent>
      </li>
   </ul>
</template>

<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import type { Ref } from 'vue';

const route = useRoute();

const category: Ref<string> = ref('');
const loading: Ref<boolean> = ref(false);

const getQuery = () => {
   const { type } = route.query;

   category.value = type as string;
};

const fakeAPi = () => {
   setTimeout(() => {
      loading.value = true;
   }, 3000);
};

getQuery();
fakeAPi();
</script>

<style scoped>
.card-list {
   margin: 20px 0;
}

.card-list-item {
   margin: 10px 0;
}

.card-list-item:last-child {
   margin-top: 10px;
}

@media screen and (max-width: 767px) {
   .card-list-item {
      margin: 10px;
   }
}
</style>

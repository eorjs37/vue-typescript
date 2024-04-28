
<script setup lang="ts">
import { getNaverNews } from '@/api/naverNewsApi';
import { reactive, ref, nextTick } from 'vue';
import type { navernewsList } from '@/interface/naverResponse.interface';

const query = ref<string>('어플레이즈');
const isLoading = ref<boolean>(true);
let list: navernewsList[] = reactive([]);
const setNaverNews = () => {
   isLoading.value = false;
   getNaverNews(query.value).then(async (res) => {
      await nextTick();
      const { data } = res;
      const { items } = data;
      list = items;
      isLoading.value = true;
   });
};

const changeQuery = (value: string) => {
   query.value = value;
};
const enterEvent = ($event: KeyboardEvent) => {
   if (query.value) {
      $event.preventDefault();
      list = [];

      setNaverNews();
   } else {
      alert(`값을 입력해주세요`);
   }
};

setNaverNews();
</script>

<template>
   <v-container>
      <div class="d-block">
         <v-text-field clearable label="제목" @keyup.enter="enterEvent" :model-value="query" @update:modelValue="changeQuery"></v-text-field>
      </div>
      <div class="mt-2" v-if="isLoading">
         <v-table>
            <thead>
               <tr>
                  <th class="text-left">기사제목</th>
                  <th class="text-left">기사링크</th>
                  <th class="text-left">pubDate</th>
               </tr>
            </thead>
            <tbody>
               <tr v-for="(item, index) in list" :key="index">
                  <td v-html="item.title"></td>
                  <td>
                     <a :href="item.originallink" target="_blank">{{ item.originallink }}</a>
                  </td>
                  <td>{{ item.pubDate }}</td>
               </tr>
            </tbody>
         </v-table>
      </div>
   </v-container>
</template>

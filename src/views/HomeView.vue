
<script setup lang="ts">
import { getNaverNews } from '@/api/naverNewsApi';
import { reactive, ref, nextTick } from 'vue';

interface navernewsList {
   description: string;
   link: string;
   originallink: string;
   pubDate: string;
   title: string;
}

const query = ref<string>('어플레이즈');
let list: navernewsList[] = reactive([]);
const setNaverNews = () => {
   getNaverNews(query.value).then(async (res) => {
      await nextTick();
      const { items } = res.data;

      list = items;
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
   }
};
</script>

<template>
   <v-container>
      <div class="d-block">
         <v-text-field clearable label="제목" @keyup.enter="enterEvent" :model-value="query" @update:modelValue="changeQuery"></v-text-field>
      </div>
      <div class="mt-2">
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
                  <td>{{ item.originallink }}</td>
                  <td>{{ item.pubDate }}</td>
               </tr>
            </tbody>
         </v-table>
      </div>
   </v-container>
</template>

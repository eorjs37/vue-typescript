<template>
   <div class="product_info_wrap">
      <ul class="product_info">
         <li>
            <figure class="product_info_img_wrap">
               <img class="product_info_img" :src="`/images/${imagesrc}.jpeg`" alt="맥북" />
            </figure>
         </li>
         <li>
            <ul class="product_info_info_list">
               <li class="product_info_prod_name">Mac Book Pro</li>
               <li class="product_info_prod_count">1개</li>
               <li class="product_info_prod_price">￦2,990,000</li>
            </ul>
         </li>
      </ul>
   </div>
</template>
<script lang="ts" setup>
import { ref, type Ref } from 'vue';

const imagesrc: Ref<string> = ref('img');
</script>
<style scoped src="@/assets/styles/productinfo.css"></style>

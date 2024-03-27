<template>
    <section class="payment_container">
        <header class="payment_header">
            <h1 class="payment_header_title">
                결제하기
            </h1>
        </header>
        <main class="payment_header_main">
            <ul class="payment_product_wrap">
                <li class="payment_product_left">
                   <h2 class="product_name">주문 상품 정보 </h2>
                   <div class="product_info_wrap">
                    <ul class="product_info">
                        <li>
                            <figure class="product_info_img_wrap">
                                <img class="product_info_img" :src="`/images/${imagesrc}.jpeg`" alt="맥북">
                            </figure>
                        </li>
                        <li>
                            <ul class="product_info_info_list">
                                <li class="product_info_prod_name">Mac Book Pro</li>
                                <li class="product_info_prod_count">
                                    1개
                                </li>
                                <li class="product_info_prod_price">
                                    90,000
                                </li>
                            </ul>
                        </li>
                    </ul>
                   </div>
                </li>
                <li class="payment_product_right"></li>
            </ul>
        </main>
        <footer></footer>
    </section>
</template>
<script lang="ts" setup>
import { ref, type Ref } from "vue";

    const imagesrc: Ref<string> = ref('img');


</script>
<style scoped src="@/assets/styles/payment.css">

</style>
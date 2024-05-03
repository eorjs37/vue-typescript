<template>
  <section class="payment_container">
    <header class="payment_header">
      <h1 class="payment_header_title">결제하기</h1>
    </header>
    <main class="payment_header_main">
      <ul class="payment_product_wrap">
        <li class="payment_product_left">
          <h2 class="product_name">주문 상품 정보</h2>
          <ProductInfo />
        </li>
        <li class="payment_product_right"></li>
      </ul>

      <ul class="payment_product_wrap second">
        <li class="payment_product_left">
          <h2 class="product_name">주문자 정보</h2>
        </li>
        <li class="payment_product_right"></li>
      </ul>
      <ul class="payment_product_wrap second">
        <li class="payment_product_left">
          <h2 class="product_name">배송 정보</h2>
          <div class="delivery_memo_wrap">
            <h5 class="delivery_memo_title">배송메모</h5>
            <SelectBox />
          </div>
        </li>
      </ul>
    </main>
    <footer></footer>
  </section>
</template>
<script lang="ts" setup>
import ProductInfo from "@/components/payment/ProductInfo.vue";
import SelectBox from "@/components/common/SelectBox.vue";
</script>
<style scoped src="@/assets/styles/payment.css"></style>

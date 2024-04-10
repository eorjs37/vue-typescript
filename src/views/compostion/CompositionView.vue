<script setup lang="ts">
interface person {
   age: number;
   name?: string;
}
import { computed, reactive, ref, watchEffect } from 'vue';

//Ref
const val = ref<number>(99);

//Computed
const plusOne = computed(() => val.value + 1);

//Reactive
const obj = reactive<person>({ age: 31, name: '최대건' });

//watchEffect
watchEffect(() => console.log(val.value));

val.value++;
</script>
<template>
   <h1>{{ val }} / {{ plusOne }}</h1>
   <h1>{{ obj.age }} / {{ obj.name }}</h1>
</template>
<style scoped></style>

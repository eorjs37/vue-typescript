<script setup lang="ts">
import { computed, reactive, readonly, ref, toRef, watch, watchEffect } from "vue";
interface person {
  age: number;
  name?: string;
}


// Ref
const val = ref<number>(99);

// Computed
const plusOne = computed(() => val.value + 1);

// Reactive
const obj = reactive<person>({ age: 31, name: "최대건" });
const obj2 = reactive<person>({ age: 26, name: "김아무개" });
// Readonly
const copy = readonly(obj);
console.log(copy);

obj.age++;
// obj2.age++;

// watchEffect
watchEffect(() => console.log(val.value, obj2.age), {
  flush: "post"
});

// watch
const state = reactive({
  count: 0
});

const counts = ref(0);

watch(
  () => [state.count, counts.value],
  ([count, countsvalue], [prevCount, precountsvalue]) => {
    console.log("state.count ", count, prevCount);
    console.log("counts.value ", countsvalue, precountsvalue);
  }
);

const addCount = () => {
  state.count++;
};
const addCounts = () => {
  counts.value++;
};

const personobject = reactive({
  foo: 1,
  bar: 2
});

const fooRef = toRef(personobject, "foo");
fooRef.value++;
console.log(fooRef.value);
console.log(personobject.foo);
</script>
<template>
  <h1>{{ val }} / {{ plusOne }}</h1>
  <h1>{{ obj.age }} / {{ obj.name }}</h1>
  <h2>{{ obj2.age }} / {{ obj2.name }}</h2>
  <button @click="addCount">버튼</button>
  <button @click="addCounts">버튼</button>
</template>
<style scoped></style>

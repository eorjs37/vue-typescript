# vue 반응

## 래핑과 언래핑

```
래핑 : .value를 통해 접근한다면 래핑된다고 말한다.
언래핑: .value없이 접근한다면 언래핑이라고 말한다.
```

## Ref

```
변경 가능한 객체를 반환하도록 한다. 주로 타입형태로 쓰고싶을때 사용된다.
```

```typescript
import { ref } from 'vue';

const val = ref<number>(99);
```

## Reactive

```
객체의 반응형 프락시(proxy)를 반환합니다.
주로 객체형태로 만들때 편하다
```

```typescript
const obj = reactive<person>({ age: 31, name: '최대건' });
const obj2 = reactive<person>({ age: 26, name: '김아무개' });
```

```html
<template>
   <h1>{{ obj.age }} / {{ obj.name }}</h1>
   <h2>{{ obj2.age }} / {{ obj2.name }}</h2>
</template>
```

## WatchEffect

```
ref,reactive로 선언된 것을 감시한다. 이전상태,현재상태를 알 수는 없다.
```

```typescript
//Ref
const val = ref<number>(99);
const obj2 = reactive<person>({ age: 26, name: '김아무개' });

//watchEffect
watchEffect(() => console.log(val.value, obj2.age), {
   flush: 'post'
});
```

## Watch

```
vue options Api와 같이 사용하면 된다.
다만 여러가지 사용할 경우 배열로 사용이 가능하다.
```

```typescript
const state = reactive({
   count: 0
});

const counts = ref(0);

watch(
   () => [state.count, counts.value],
   ([count, countsvalue], [prevCount, precountsvalue]) => {
      console.log('state.count ', count, prevCount);
      console.log('counts.value ', countsvalue, precountsvalue);
   }
);
```

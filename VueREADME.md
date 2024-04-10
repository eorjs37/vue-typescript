# vue 반응

## 래핑과 언래핑

```
래핑 : .value를 통해 접근한다면 래핑된다고 말한다.
언래핑: .value없이 접근한다면 언래핑이라고 말한다.
```

## Ref

```
변경 가능한 객체를 반환하도록 한다
```

```typescript
import { ref } from 'vue';

const val = ref<number>(99);
```

## Reactive

```
객체의 반응형 프락시(proxy)를 반환합니다.
```

```typescript

```

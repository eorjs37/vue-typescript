# vue-typescript

## node-version

```
node 16.18.1
```

## vue cli typescript

npm create vue@3

## project name

vue-typescript

## Add Typescript

Yes

## Add JSX Support

No

## Add Vue Router for Single Page Application development?

Yes

## Add Pinia for state management?

No

## Add Vitest for Unit Testing?

No

## Add an End-to-End Testing Solution?

No

## Add ESLint for code quality?

Yes

## Add Prettier for code formatting?

Yes

## Option 'importsNotUsedAsValues' is deprecated and will stop functioning in TypeScript 5.5. Specify compilerOption '"ignoreDeprecations": "5.0"' to silence this error. 라고 뜰 경우

```json
//tsconfig.json에 "ignoreDeprecations":"5.0",추가
{
  "extends": "@vue/tsconfig/tsconfig.web.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue"],
  "compilerOptions": {
    "ignoreDeprecations": "5.0",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },

  "references": [
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
```

## npm install

```bash
npm install
```

## v-once
> 렌더링을 한번만 할 경우 사용된다.
```vue
    <span v-once>
      <!-- changeMessagee 함수를 통해도 변경안됨 -->
     {{ message }}
    </span>
    <span>
    <!-- changeMessagee 함수를 통해 데이터 변경됨 -->
      {{ message }}
    </span>
    <button @click="changeMessagee">메세지 변경</button>
```
## keep-alive
> 컴퍼넌트의 캐쉬를 유지하고 싶을때 사용된다.


## Docker 

### Dockerfile
```bash
docker build --platform linux/amd64 -t eorjs37/vue-typescript .
```

### Docker Run
```bash
docker run -d --name blog -p 80:80 eorjs37/vue-typescript 
```
### Docker Run
```bash
docker run -d --name web-front -v /etc/letsencrypt:/etc/letsencrypt -p 444:443 eorjs37/vue-typescript
```
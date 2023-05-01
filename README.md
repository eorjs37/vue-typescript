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


## typescript + jest
```bash
npm install --save-dev jest @vue/test-utils
npm i @vue/vue3-jest
npm install --save-dev @vue/test-utils
npm install --save-dev ts-jest
npm install --save-dev @types/jest
npm install --save-dev @babel/core 
npm install --save-dev @babel/preset-env 
npm install --save-dev @babel/preset-typescript 
npm install --save-dev jest-environment-jsdom 
npm install --save-dev jest-transform-stub
```

package.json
```json
{
  
  "scripts": {
    "test:unit": "jest --watchAll"
  }
}

```


jest.config.js
```javascript
module.exports = {
   moduleFileExtensions: [
      'js',
      'ts',
      'json',
      // 모든 vue 파일(`*.vue`)을 처리하기 위해 Jest에게 알려줍니다
      'vue'
   ],
   transform: {
      // process `*.vue` files with `vue-jest`
      '.*\\.(vue)$': '@vue/vue3-jest',
      '^.+\\.tsx?$': 'ts-jest',
      '.*\\.(js)$': 'babel-jest',
      '.*\\.(ts)$': 'babel-jest',
      '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
   },
   moduleNameMapper: {
      // 별칭 @(프로젝트/src) 사용하여 하위 경로의 파일을 맵핑합니다
      '^@/(.*)$': '<rootDir>/src/$1'
   },
   testMatch: ['**/*.spec.[jt]s?(x)', '**/*.test.[jt]s?(x)'],
   // node_modules 경로 하위에 있는 모든 테스트 파일을 대상에서 제외합니다
   testPathIgnorePatterns: ['/node_modules/'],
   testEnvironment: 'jsdom',
   testEnvironmentOptions: {
      customExportConditions: ['node', 'node-addons']
   },
   transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)']
};

```

tsconfig.json
```json
{
  "compilerOptions": {
    "types": [
      "jest"
    ]
  }
}
```


babel.config.json
```json
{
  "presets": ["@babel/preset-env","@babel/preset-typescript"]
}
```

명령어 실행
```bash
npm run test:unit
```
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

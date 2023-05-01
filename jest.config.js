module.exports = {
   moduleFileExtensions: [
      'js',
      'ts',
      'json',
      // 모든 vue 파일(`*.vue`)을 처리하기 위해 Jest에게 알려줍니다
      'vue'
   ],
   //jest에서는 javascript만 사용하므로 vue,이미지등을 변환해주는 것이 필요
   transform: {
      // `vue-jest`를 사용하여 모든 vue 파일(`*.vue`)을 처리합니다
      '.*\\.(vue)$': '@vue/vue3-jest',
      '.*\\.(js)$': 'babel-jest',
      '.*\\.(ts)$': 'babel-jest',
      '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
      '^.+\\.tsx?$': 'ts-jest'
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
   transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'],
   verbose: true
};

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
   root: true,
   extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier/skip-formatting'],
   rules: {
      'vue/no-export-in-script-setup': 0,
      'vue/valid-template-root': 0,
      'no-undef': 0,
      'vue/comment-directive': 0
   },
   parserOptions: {
      ecmaVersion: 'latest'
   }
};

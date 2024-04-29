/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-typescript", "@vue/eslint-config-prettier/skip-formatting"],
  rules: {
    "vue/no-export-in-script-setup": 0,
    "vue/valid-template-root": 0,
    "no-undef": 0,
    "vue/comment-directive": 0,
    "spaced-comment": ["error", "always", { exceptions: ["-", "+"], markers: ["/"] }],
    "indent": ["error", 2],
    "vue/script-indent": ["error", 2, { "baseIndent": 0 }],
    "vue/html-indent":["error",2,{
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "quotes":["error","double"]
  },
  parserOptions: {
    ecmaVersion: "latest"
  }
};

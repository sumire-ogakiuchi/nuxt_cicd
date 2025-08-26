// eslint.config.js
import vueParser from "vue-eslint-parser";
import pluginVue from "eslint-plugin-vue";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.vue", "**/*.js", "**/*.ts"],
    languageOptions: {
      parser: vueParser,
    },
    plugins: {
      vue: pluginVue,
      prettier: pluginPrettier,
    },
    rules: {
      // Vue系
      "vue/no-unused-vars": "warn",
      "vue/multi-word-component-names": "off",
      // Prettierを ESLint と統合
      "prettier/prettier": "error",
    },
    extends: [
      // Vueの推奨ルール
      "plugin:vue/vue3-recommended",
      // Prettierと競合するルールを無効化
      prettierConfig,
    ],
  },
];



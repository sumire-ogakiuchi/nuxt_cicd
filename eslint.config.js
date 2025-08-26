// eslint.config.js

export default [
  {
    ignores: ['.vite/'], // ビルドキャッシュなどの不要なファイルは無視
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // Vue 3 に関するルール（必要に応じて調整）
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-components': 'warn',
      'vue/no-multiple-template-root': 'off',

      // TypeScript に関するルール
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  // Prettier を最後に適用（他ルールとの競合を避けるため）
  {
    name: 'prettier',
    rules: {
      ...prettier.rules,
    },
  },
];


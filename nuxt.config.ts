// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
  ],
  // Nuxt アプリケーションのソース ディレクトリ
  srcDir: "src/",
  app: {
    baseURL: "/nuxt_cicd/",
  },
});

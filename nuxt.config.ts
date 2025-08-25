// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Nuxt アプリケーションのソース ディレクトリ
  srcDir: "src/",
  app: {
    baseURL: '/nuxt_cicd/'
  }
})

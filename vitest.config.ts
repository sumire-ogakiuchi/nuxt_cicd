import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  // @nuxt/test-utils Nuxt用のVitest設定
  test: {
    environment: "nuxt",
  },
});

import { describe, it, expect } from "vitest";
import { setup } from "@nuxt/test-utils";
import { mount } from "@vue/test-utils";

describe("トップページのテスト", async () => {
  await setup();

  it("「こんにちは！」表示テスト", async () => {
    // Nuxtのテスト環境が整ってからパス読み込み
    const TestPage = await import("~/pages/index.vue");
    const wrapper = mount(TestPage.default);

    expect(wrapper.text()).toContain("こんにちは！");
  });
});

import { describe, it, expect } from "vitest";
import { setup } from "@nuxt/test-utils";
import { mount } from "@vue/test-utils";
import TestPage from "~/pages/index.vue";

describe("トップページのテスト", async () => {
  await setup();

  it("「こんにちは！」表示テスト", () => {
    const wrapper = mount(TestPage);

    expect(wrapper.text()).toContain("こんにちは！");
  });
});

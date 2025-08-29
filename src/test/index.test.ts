import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import IndexPage from "~/pages/index.vue";

describe("トップページのテスト", () => {
  it("「こんにちは！」表示テスト", () => {
    const wrapper = mount(IndexPage);

    expect(wrapper.text()).toContain("こんにちは！");
  });
});

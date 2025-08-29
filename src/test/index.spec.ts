import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TestPage from "~/pages/index.vue";

describe("トップページのテスト", () => {
  it("「こんにちは！」が表示される", () => {
    const wrapper = mount(TestPage);
    expect(wrapper.text()).toContain("こんにちは！");
  });
});

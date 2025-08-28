import { describe, it, expect } from "vitest";

describe("トップページのテスト", async () => {
  it("「こんにちは！」表示テスト", async () => {
    const html = await $fetch("/");

    expect(html).toContain("こんにちは！");
  });
});

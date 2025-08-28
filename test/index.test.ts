import { describe, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe("トップページのテスト", async () => {
  await setup();

  it("「こんにちは！」表示テスト", async () => {
    const html = await $fetch("/");

    expect(html).toContain("こんにちは！");
  });
});

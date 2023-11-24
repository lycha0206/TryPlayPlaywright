import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Recording...
  await page.goto("https://www.google.com/");
  await expect(
    page.getByRole("button", { name: "I'm Feeling Lucky" })
  ).toContainText("Lucky");

  await expect(
    page.getByRole("button", { name: "Google Search" })
  ).toContainText("oo");
});

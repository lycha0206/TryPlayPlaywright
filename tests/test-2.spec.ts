import { test, expect, defineConfig } from "@playwright/test";

test("test", async ({ page }) => {
  // await page.goto("https://www.amazon.com/");

  // await expect(
  //   page.getByRole("link", { name: "Groceries", exact: true })
  //await page.goto('https://www.target.com/');

  test.setTimeout(30 * 1000);

  defineConfig({
    expect: { timeout: 20 * 1000 },
  });

  await page.goto("https://www.target.com/");
  await expect(page.getByLabel("Categories")).toContainText("Categories");

  await page.locator('[data-test="\\@web\\/Search\\/SearchInput"]').click();

  // await page
  //   .locator('[data-test="\\@web\\/Search\\/SearchInput"]')
  //   .fill("iphone se 3rd");

  await page
    .getByPlaceholder("What can we help you")
    .first()
    .fill("iphone se 3rd");

  await page.pause();

  await page
    .locator('[data-test="\\@web\\/Search\\/SearchInput"]')
    .press("Enter");

  await page.pause();
  await expect(page.locator("body")).toContainText("Total by");
});

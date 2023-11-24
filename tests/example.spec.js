// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();

  // await expect(page.locator('body')).toContainText("moddern");
});

test("has text", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page.locator("body")).toContainText("modern");
});

test("not have text", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page.locator("body")).not.toContainText("modern123");
  await expect(page.locator(".hero__title")).not.toContainText("hello");
});

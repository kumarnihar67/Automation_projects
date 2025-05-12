import test, { page, expect } from "@playwright/test";

test("DEMOQA_test", async ({ page }) => {
  await page.goto("https://demoqa.com/");
  await expect(page).toHaveURL(/demoqa.com/);
  await page.pause()
})
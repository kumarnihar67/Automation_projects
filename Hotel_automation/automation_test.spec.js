import test, { page, expect } from "@playwright/test";

test("Automation1", async ({ page }) => {
  await page.goto("https://automationintesting.online/");
  await page.getByRole('button', { name: 'Let me hack!' }).click();
  await page.pause();
  await expect(page.locator("img", { name: "Hotel logoUrl" })).toHaveCount(21);
  await page.$('text=Hotel logoUrl')
  await expect(page).toHaveScreenshot;

});
import test, { page, expect } from "@playwright/test";

test("Testing of room", async ({ page }) => {
  await page.goto("https://automationintesting.online/");
  await page.getByRole('button', { name: 'Let me hack!' }).click();
  await page.pause();
  await page.getByRole("heading", { name: "Rooms" }).click();
  await expect(page.getByRole("heading", { name: "Rooms" })).toHaveAccessibleName('Rooms')
  await page.getByRole("heading", { name: "single" }).click();
  await expect(page.getByRole("heading", { name: "single" })).toHaveAccessibleName('single')
  await page.getByText("TV").click();
  await expect(page.getByText('TV')).toHaveText("TV")
  await page.getByText("WiFi").click();
  await expect(page.getByText('WiFi')).toBeVisible();
  await page.getByText("Safe").click();
  await expect(page.getByText('Safe')).toBeVisible();
  await page.getByRole("button", { name: "Book this room" }).click()
  await expect(page.getByRole("button", {name: "Book this room"})).toBeChecked
});
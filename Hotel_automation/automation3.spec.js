import test, { page, expect } from "@playwright/test";

test("Testing of room image", async ({ page }) => {
  await page.goto("https://automationintesting.online/");
  await page.pause()
  await page.getByRole('img', { name: 'Preview image of room101' }).click();
  await expect(page.getByRole('img', { name: 'Preview image of room101' })).toBeVisible()
  await page.getByRole("button", { name: "Book this room" }).click()
  
  await expect(page.locator('.rbc-calendar')).toBeVisible()
  await page.getByRole('textbox', { name: 'Firstname' }).click();
  await expect(page.getByRole('textbox', { name: 'Firstname' })).toBeVisible()
  await expect(page.getByRole('textbox', { name: 'Firstname' })).toBeEditable()
  await page.getByRole('textbox', { name: 'Lastname' }).click();
  await expect(page.getByRole('textbox', { name: 'Lastname' })).toBeVisible()
  await expect(page.getByRole('textbox', { name: 'Lastname' })).toBeEditable()
  await page.locator('input[name="email"]').click();
  await expect(page.locator('input[name="email"]')).toBeVisible()
  await expect(page.locator('input[name="email"]')).toBeEditable()
  await page.locator('input[name="phone"]').click();
  await expect(page.locator('input[name="phone"]')).toBeVisible()
  await expect(page.locator('input[name="phone"]')).toBeEditable()
  await page.getByText('CancelBook').click();
  await expect(page.getByText('CancelBook')).toHaveText("CancelBook")
  await page.getByRole('button', { name: 'Book' }).click();
  await page.getByRole('button', { name: 'Book' }).toBeVisible
  await expect(page.getByRole("button", { name: 'Book' })).toBeChecked
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'Cancel' }).toBeVisible
  await expect(page.getByRole("button", { name: 'Cancel' })).toBeChecked

})
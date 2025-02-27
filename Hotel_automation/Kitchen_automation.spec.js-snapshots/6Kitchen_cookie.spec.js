import test, { page, expect } from "@playwright/test";

test("Kitchen_test", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");
  await expect(page).toHaveURL(/kitchen.applitools.com/);
  await page.pause();

  await expect( page.getByRole('link', { name: 'Cookie' })).toBeVisible()
  await expect( page.getByRole('link', { name: 'Cookie' })).toBeEnabled()
  await expect( page.getByRole('link', { name: 'Cookie' })).toHaveClass("Card_card__3AVip")

  await page.getByRole('heading', { name: 'Cookie' }).click();
  await page.getByRole('heading', { name: 'Protein' }).click();
  await page.getByText('Name: protein').click();
  await page.getByText('Default Value: chicken').click();
  await page.getByText('Name: protein').click();
  await page.getByText('protein', { exact: true }).click();
  await page.getByText('Default Value: chicken').click();
  await page.getByText('Default Value: chicken').click();
  await page.getByText('chicken').click();
  await page.getByRole('heading', { name: 'Veggie' }).click();
  await page.getByText('Name: vegetable').click();
  await page.getByText('vegetable').click();
  await page.getByText('Default Value: broccoli').click();
  await page.getByText('broccoli').click();
  await page.getByRole('link', { name: 'The Kitchen' }).click();

})
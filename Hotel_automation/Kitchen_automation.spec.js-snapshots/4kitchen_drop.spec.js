import test, { page, expect } from "@playwright/test";

test("Kitchen_test", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");
  await expect(page).toHaveURL(/kitchen.applitools.com/);

  await expect( page.getByRole('link', { name: 'Drag & Drop' })).toBeVisible()
  await expect( page.getByRole('link', { name: 'Drag & Drop' })).toBeEnabled()
  await expect( page.getByRole('link', { name: 'Drag & Drop' })).toHaveClass("Card_card__3AVip")

  await page.getByRole('heading', { name: 'Drag & Drop' }).click();
  await expect(page.getByRole('heading', { name: 'Drag & Drop', exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Drag & Drop', exact: true })).toBeEnabled()
  await expect(page.getByRole('heading', { name: 'Drag & Drop', exact: true })).toHaveClass("chakra-heading css-1vyua5b")

  await expect(page.getByRole('heading', { name: 'HTML Drag & Drop API' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'HTML Drag & Drop API' })).toBeEnabled()
  await expect(page.getByRole('heading', { name: 'HTML Drag & Drop API' })).toHaveClass("chakra-heading css-1nk1cjg")

  await expect(page.getByRole('heading', { name: 'Menu' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Menu' })).toBeEnabled()
  await expect(page.getByRole('heading', { name: 'Menu' })).toHaveClass("chakra-heading css-17r9f3r")

  await expect(page.getByText('Fried ChickenHamburgerIce')).toBeVisible()
  await expect(page.getByText('Fried ChickenHamburgerIce')).toBeEnabled()
  await expect(page.getByText('Fried ChickenHamburgerIce')).toHaveText('Fried ChickenHamburgerIce Cream')
  await expect(page.getByText('Fried ChickenHamburgerIce')).not.toHaveText('asdfghytrewq')
  await expect(page.getByText('Fried ChickenHamburgerIce')).toHaveId('menu-items')

  await expect(page.getByRole('heading', { name: 'Order Ticket' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Order Ticket' })).toBeEnabled()
  await expect(page.getByRole('heading', { name: 'Order Ticket' })).toHaveClass("chakra-heading css-17r9f3r")

  await expect(page.locator('#plate-items')).toBeVisible()
  await expect(page.locator('#plate-items')).toBeEnabled()
  await expect(page.locator('#plate-items')).toHaveId('plate-items')
})
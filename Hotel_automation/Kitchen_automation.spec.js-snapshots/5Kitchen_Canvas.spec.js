import test, { page, expect } from "@playwright/test";

test("Kitchen_test", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");
  await expect(page).toHaveURL(/kitchen.applitools.com/);
  await page.pause();

  await page.getByRole('link', { name: 'Canvas' })
  await expect(page.getByRole('link', { name: 'Canvas' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Canvas' })).toBeEnabled()
  await expect(page.getByRole('link', { name: 'Canvas' })).toHaveClass("Card_card__3AVip")

  await page.getByRole('heading', { name: 'Canvas' }).click();
  await expect(page.getByRole('heading', { name: 'Canvas' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Canvas' })).toBeEnabled()
  await expect(page.getByRole('heading', { name: 'Canvas' })).toHaveClass("chakra-heading css-1vyua5b")
  
  await page.locator('#burger_canvas').click({
    position: {
      x: 44,
      y: 117
    }
  });
 
  await expect(page.locator('#burger_canvas')).toBeVisible()
  await expect(page.locator('#burger_canvas')).toBeEnabled()
  await expect(page.locator('#burger_canvas')).toHaveId("burger_canvas")

  await page.getByRole('link', { name: 'The Kitchen' }).click();

})
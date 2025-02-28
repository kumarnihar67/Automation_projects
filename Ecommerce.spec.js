import test, { page, expect } from "@playwright/test";

test("Ecommerce_test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByText("Swag Labs").click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="item-sauce-labs-backpack-img"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill("abcd");
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill("efgh");
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill("1234");
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();

  await page.locator('[data-test="pony-express"]').click();
  await page.locator('[data-test="complete-header"]').click();
  await page.locator('[data-test="complete-text"]').click();
  await page.locator('[data-test="title"]').click();
  await page.locator('[data-test="back-to-products"]').click();
});

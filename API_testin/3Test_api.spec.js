import { test, expect } from '@playwright/test'
import exp from "constants"
test('my test', async ({ page }) => {
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google')
  })

  test("API POST Request", async ({ request }) => {
    const response = await request.post("https://reqres.in/api/register", {
      data: {
        email: "eve.holt@reqres.in",
        password: "pistol",
      },
    });
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain( "QpwL5tke4Pnpja7X4");
    console.log(await response.json());
  });

  test("1API POST Request", async ({ request }) => {
    const response = await request.post("https://reqres.in/api/login", {
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    });
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain( "QpwL5tke4Pnpja7X4");
    console.log(await response.json());
  });
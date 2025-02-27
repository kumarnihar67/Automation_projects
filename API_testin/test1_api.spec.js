import { test, expect } from '@playwright/test';



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

  test("API GET Request", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users?delay=3");
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain("janet");
    console.log(await response.json());
  });
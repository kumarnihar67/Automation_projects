import { test, expect } from "@playwright/test";

test("Automation test", async ({ page }) => {
  await page.goto("https://automationintesting.online/");
  await page.getByRole("img", { name: "Hotel logoUrl" }).click();
  await page.getByRole("button", { name: "Let me hack!" }).click();
  await page.getByRole("heading", { name: "Rooms" }).click();
  await page.getByRole("heading", { name: "single" }).click();
  await page.locator(".fa").first().click();
  await page.getByRole("heading", { name: "single" }).click();
  await page.getByText("TV").click();
  await page.getByText("WiFi").click();
  await page.getByText("Safe").click();
  await page.getByRole("button", { name: "Book this room" }).click();
  await page.getByRole("textbox", { name: "Firstname" }).click();
  await page.getByRole("textbox", { name: "Firstname" }).fill("abcd");
  await page.getByRole("textbox", { name: "Lastname" }).click();
  await page.getByRole("textbox", { name: "Lastname" }).fill("xyz");
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill("abcd@gmail.com");
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill("123456");
  await page.getByRole("button", { name: "Book" }).click();
  await page.close();
});

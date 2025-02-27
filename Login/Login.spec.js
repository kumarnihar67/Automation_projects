import test, { page, expect } from "@playwright/test";

test("Login_test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.getByRole("img", { name: "company-branding" }).click();
  await page.getByRole("heading", { name: "Login" }).click();
  await page.getByText("Username : AdminPassword :").click();
  await page.getByText("Username", { exact: true }).click();
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByText("Password", { exact: true }).click();
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
});

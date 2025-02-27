import test, { page, expect } from "@playwright/test";

test("Kitchen_test", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");
  await expect(page).toHaveURL(/kitchen.applitools.com/);
  await page.pause();

  await page.getByRole("link", { name: "Alert" }).click();
  await expect(page.getByRole("heading", { name: "Alert" })).toBeVisible();

  await page.getByRole("heading", { name: "Alert" }).click();
  await page.pause();

  await page.getByRole("button", { name: "Trigger an Alert" }).click();
  await expect( page.getByRole("button", { name: "Trigger an Alert" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Trigger an Alert" })).toBeEnabled();
  await expect(page.getByRole("button", { name: "Trigger an Alert" })).toHaveId("alert-button");

  await page.getByText("Triggered 1 time(s)").click();
  await expect(page.getByText("Triggered 1 time(s)")).toBeVisible();
  await expect(page.getByText("Triggered 1 time(s)")).toBeEnabled();
  await expect(page.getByText("Triggered 1 time(s)")).toHaveId("alert-count");
  await expect(page.getByText("Triggered 1 time(s)")).toHaveCount(1);

  await page.getByRole("button", { name: "Trigger a Confirmation" }).click();
  await expect(page.getByRole("button", { name: "Trigger a Confirmation" })).toBeVisible();
  await expect( page.getByRole("button", { name: "Trigger a Confirmation" })).toBeEnabled();
  await expect( page.getByRole("button", { name: "Trigger a Confirmation" })).toHaveId("confirm-button");
  await expect(page.getByRole("button", { name: "Trigger a Confirmation" })).toHaveClass("chakra-button css-huwc4k");

  await page.locator("#confirm-count").click();
  await expect(page.locator("#confirm-count")).toBeVisible();
  await expect(page.locator("#confirm-count")).toBeEnabled();
  await expect(page.locator("#confirm-count")).toHaveId("confirm-count");

  await page.getByText("Answer: No").click();
  await expect(page.getByText("Answer: No")).toBeVisible()
  await expect(page.getByText("Answer: No")).toBeEnabled()
  await expect(page.getByText("Answer: No")).toHaveText("Answer: No")
  await expect(page.getByText("Answer: No")).not.toHaveText("Ansfdhyrht")
  await expect(page.getByText("Answer: No")).toHaveId("confirm-answer")

  await page.getByRole("button", { name: "Trigger a Prompt" }).click();
  await expect(page.getByRole("button", { name: "Trigger a Prompt" })).toBeVisible()
  await expect(page.getByRole("button", { name: "Trigger a Prompt" })).toBeEnabled()
  await expect(page.getByRole("button", { name: "Trigger a Prompt" })).toHaveId("prompt-button")
  await expect(page.getByRole("button", { name: "Trigger a Prompt" })).toHaveClass("chakra-button css-huwc4k")
  
  await page.locator("#prompt-count").click();
  await expect(page.locator("#prompt-count")).toBeVisible()
  await expect(page.locator("#prompt-count")).toBeEnabled()
  await expect(page.locator("#prompt-count")).toHaveId("prompt-count")
  await expect(page.locator("#prompt-count")).toHaveCount(1)

  await page.getByText("Answer: Cancelled").click();
  await expect(page.getByText("Answer: Cancelled")).toBeVisible()
  await expect(page.getByText("Answer: Cancelled")).toBeEnabled()
  await expect(page.getByText("Answer: Cancelled")).toContainText("Answer")
  await expect(page.getByText("Answer: Cancelled")).toHaveId("prompt-answer")

  await page.getByRole("link", { name: "The Kitchen" }).click();
  
});

import { test, expect } from "@playwright/test";

test("Kitchen_test", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");

  const listItem = await page.locator('.Card_card__3AVip').all();
  console.log(listItem.length);
  
 
  await expect(listItem).toHaveLength(11);

  for (const row of listItem) {
    const text = await row.innerText();
    console.log(text);

    if (text.includes('Canvas')) {
      await row.click();
      console.log('Clicked on item containing "Canvas"');
      break;
    }
  }
});
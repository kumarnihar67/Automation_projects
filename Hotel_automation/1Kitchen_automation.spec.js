import test,{page, expect} from"@playwright/test"

test('Kitchen_test', async({page}) => {
    await page.goto("https://kitchen.applitools.com/");
    await expect(page).toHaveURL(/kitchen.applitools.com/);
   
    await page.pause()
    await page.getByRole('img', { name: 'Chefs with code ingredients' }).click();
    await expect(page.getByRole('img', { name: 'Chefs with code ingredients' })).toBeVisible()
    await expect(page).toHaveTitle('The Kitchen');
    await expect(page).toHaveScreenshot();

    await page.getByRole('heading', { name: 'The Kitchen' }).click();
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    await expect(page.locator('text=The Kitchen')).toBeVisible('The Kitchen')
    await expect(page.locator('text=The Kitchen')).not.toHaveText('azsxdc')
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', 'chakra-heading css-dpmy2a');

    await page.getByText('A pantry full of web').click();
    await expect(page.getByText('A pantry full of web')).toBeVisible()
    await expect(page.getByText('A pantry full of web')).toHaveText('A pantry full of web components that can be used for automated testing.')
    await expect(page.getByText('A pantry full of web')).not.toHaveText('zxcdsfhj')
    await expect(page.getByText('A pantry full of web')).toHaveAttribute('class', 'chakra-text css-la3nd4')

    await page.getByRole('link', { name: 'Alert' });
    await expect(page.getByRole('link', { name: 'Alert' })).toBeEnabled()
    await expect(page.getByRole('link', { name: 'Alert' })).toHaveRole("link")
    await expect(page.getByRole('link', { name: 'Alert' })).toHaveAttribute('class', "Card_card__3AVip")
    
})

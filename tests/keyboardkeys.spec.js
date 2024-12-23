const{test,expect} =require('@playwright/test')

test('keyboardkeys',async ({page}) => {
    await page.goto('https://google.com/');
    await page.locator('#APjFqb').first().click();
    await page.keyboard.press('Tab');

    await page.keyboard.press('Enter');
})
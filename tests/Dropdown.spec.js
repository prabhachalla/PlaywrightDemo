const {test, expect} =require('@playwright/test')

test('Dropdownvalue', async ({page}) => {
    await page.goto('https://facebook.com/');

    await page.getByText('Create new account').click();
    const dropdown=await page.locator('#month');
    await expect(dropdown).toHaveValue('12');
    
    await dropdown.selectOption('5');
    //await page.close();

})
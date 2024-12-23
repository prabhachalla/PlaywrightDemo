const{test,expect} =require('@playwright/test')

 test('Datepicker',async ({page}) => {
    await page.goto('https://www.youtube.com/results?search_query=playwright');
    //assert the url
    //wait expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright');

       await expect(page.getByRole('combobox', { name: 'Search' })).toHaveText('playwright');
    //wait expect(page).toHaveTitle('playwright - YouTube ')
})
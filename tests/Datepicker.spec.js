const{test,expect} =require('@playwright/test')

 test('Datepicker',async ({page}) => {
    await page.goto('https://jqueryui.com/datepicker/');
    const frame=page.frameLocator('.demo-frame')
    //await frame.locator('.hasDatepicker').fill('12/12/2024');
    await frame.locator('.hasDatepicker').click();
    await frame.locator('.ui-datepicker-today').click();


})
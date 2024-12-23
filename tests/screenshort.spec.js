const { test, expect } = require('@playwright/test');

test('Title of the YouTube after searching', async ({ page }) => {
    // Navigate to YouTube
    await page.goto('https://www.youtube.com/results?search_query=testerstalk');

    //await page.locator('ytd-shelf-renderer #items').screenshot({ path : '.screenshorts/Elementscreen.png'});

    await page.waitForTimeout(3000);

   // await page.locator('ytd-page-manager').screenshot({path : '.screenshorts/pagescreenshorts.png'});

    await page.screenshot({path : '.screenshorts/Fullscreenshort.png'});

    await page.close();

});

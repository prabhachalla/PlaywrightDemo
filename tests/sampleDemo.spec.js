const { test, expect } = require('@playwright/test');

test('Title of the YouTube after searching', async ({ page }) => {
    // Navigate to YouTube
    await page.goto('https://youtube.com/');

    await page.getByRole('combobox', { name: 'Search' }).fill('telugu videos live news');

    // Click the search button
    
await page.getByRole('button', { name: 'Search', exact: true }).click();

await page.locator('ytd-item-section-renderer').screenshot({ path: 'screenshot.png' });


    //Optionally, check the title of the page to verify it changed after the search
    
    await expect(page).toHaveTitle('telugu videos live news - YouTube');

    await page.getByRole('link', { name: 'TV9 Telugu News LIVE by TV9' }).click();

    await expect(page.getByRole('heading', { name: 'TV9 Telugu News LIVE' }).locator('yt-formatted-string')).toBeVisible();
    console.log(await page.title()); 
});

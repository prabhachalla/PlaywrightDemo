const { test, expect } = require('@playwright/test');
// Runs before each individual test
test.beforeEach(async ({ page }) => {
    await page.goto('https://google.com/');
});
// Runs once before all tests
test.beforeAll('Before all tests', async () => {
    console.log('Before all tests');
});



// Runs after each individual test
test.afterAll(async ({page}) => {
    console.log('After each test');
});

// // Test 1: Verify the title of the page
// test('Check Google homepage title', async ({ page }) => {
//     const title = await page.title();
//     console.log('Page title:', title);
//     expect(title).toBe('Google'); // Assertion
// });

// // Test 2: Verify the presence of the Google search input
// test('Check Google search input field', async ({ page }) => {
//     const searchBox = await page.locator('input[name="q"]');
//     //await expect(searchBox).toBeVisible();
//     console.log('Search input is visible');
// });

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLogin();
  await loginPage.login('testuser', 'password123');
  await loginPage.verifyLoginSuccess();
});

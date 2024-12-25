const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    // Define selectors
    this.usernameField = page.locator('[aria-label="Email address or phone number"]');
    this.passwordField = page.locator('[aria-label="Password"]');
    this.loginButton = page.getByTestId('royal_login_button');
  }

  // Define reusable methods
  async navigateToLogin() {
    await this.page.goto('https://facebook.com/');
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  // async verifyLoginSuccess() {
  //   await expect(this.page.locator('#welcome-message')).toHaveText('Welcome');
  // }
}

module.exports = { LoginPage };

import { test, expect } from '@playwright/test';

test('test', async ({ page, request }) => {
await page.goto('https://github.com/login');
await page.getByRole('button', { name: 'Sign in' }).click();
await expect(page.getByLabel('Username or email address')).toBeEmpty();
await page.getByLabel('Username or email address').click();
await page.getByLabel('Username or email address').fill('gfeggff');
await page.getByLabel('Password').click();
await page.getByLabel('Password').fill('fgfg');
await page.getByRole('button', { name: 'Sign in', exact: true }).click();
await expect(page.getByRole('alert')).toContainText('Incorrect username or password');

)}
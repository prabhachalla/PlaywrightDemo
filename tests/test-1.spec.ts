import { test, expect } from '@playwright/test';

test('test', async ({ page, request }) => {
  await page.goto('https://www.google.com/search?q=github&oq=github&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDMxODlqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'GitHub · Build and ship' }).click();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.goto('https://github.com/login');
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('ch.prabhakar');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('huhf');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('Incorrect username or').click();
});
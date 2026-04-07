const { test, expect } = require('@playwright/test');

test.only('Login and save storage state', async ({ page }) => {

  // 1. Open login page
  await page.goto('https://practice.expandtesting.com/login');

  // 2. Validate login page
  await expect(page.locator('h1')).toContainText('Test Login page');

  // 3. Enter credentials
  await page.getByLabel('Username').fill('practice');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  
  // 4. Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // 5. Validate successful login
  await expect(page).toHaveURL(/secure/);
  const flashMessage = page.locator('#flash');
  await expect(flashMessage).toBeVisible();
  await expect(flashMessage).toContainText('You logged into a secure area!');

  // ----------------------------------------
  // 6. Save storage state
  await page.context().storageState({
    path: 'playwright/.auth/loginState.json'
  });

  await page.waitForTimeout(2000);
});


test('Login and save storage state, values from .env', async ({ page }) => {
  const username = process.env.SS_ID;
  const password = process.env.SS_PASS;
  const storageStatePath = process.env.STORAGE_STATE_PATH;

  // 1. Open login page
  await page.goto('https://practice.expandtesting.com/login');

  // 2. Validate login page
  await expect(page.locator('h1')).toContainText('Test Login page');

  // 3. Enter credentials
  await page.getByLabel('Username').fill(username);
  await page.getByLabel('Password').fill(password);

  // 4. Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // 5. Validate successful login
  await expect(page).toHaveURL(/secure/);
  const flashMessage = page.locator('#flash');
  await expect(flashMessage).toBeVisible();
  await expect(flashMessage).toContainText('You logged into a secure area!');

  // 6. Save storage state
  await page.context().storageState({
    path: storageStatePath
  });

  await page.waitForTimeout(2000);
});
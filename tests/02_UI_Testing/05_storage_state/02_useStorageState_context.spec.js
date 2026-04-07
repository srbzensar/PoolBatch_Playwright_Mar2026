const { test, expect } = require('@playwright/test');

test.only('Access secure page using stored login state and browser fixture', async ({ browser }) => {
  const context = await browser.newContext({
    storageState: 'playwright/.auth/loginState.json',
  });

  const page = await context.newPage();
  await page.goto('https://practice.expandtesting.com/secure');

    // Validate page
  await expect(page.url()).toContain('secure');

  // Validate flash message is visible and contains expected text
  await expect(page.locator('text=Welcome to the Secure Area.')).toBeVisible();

  await page.close();
});



test.describe('role based tests', () => {

  test.use({
  storageState: 'playwright/.auth/loginState.json'
  });

  test('Access secure page, use with test', async ({ page }) => 
  {
    // Directly open secured URL (no login)
    await page.goto('https://practice.expandtesting.com/secure');

    // Validate page
    await expect(page.url()).toContain('secure');

    // Validate flash message is visible and contains expected text
    await expect(page.locator('text=Welcome to the Secure Area.')).toBeVisible();
    await page.close();
  });

});
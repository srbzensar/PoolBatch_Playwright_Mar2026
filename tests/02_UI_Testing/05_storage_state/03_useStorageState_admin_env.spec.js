const { test, expect } = require('@playwright/test');

test.describe('role based tests', () => {

  const storageStatePath = process.env.STORAGE_STATE_PATH;

  test.use({
  storageState: storageStatePath
  });

  test.only('Access secure page, use with test', async ({ page }) => 
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
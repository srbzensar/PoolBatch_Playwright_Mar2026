const { test, expect } = require('@playwright/test');

// Load state created via OTP + backend auth
test.use({
  storageState: 'playwright/.auth/otpUser.json',
});

test('Access secure page without OTP or login UI', async ({ page }) => {

    // Direct secure navigation
    await page.goto('https://practice.expandtesting.com/secure');

    // Validate page
    await expect(page.url()).toContain('secure');

    // Validate flash message is visible and contains expected text
    await expect(page.locator('text=Welcome to the Secure Area.')).toBeVisible();
    await page.close();
});
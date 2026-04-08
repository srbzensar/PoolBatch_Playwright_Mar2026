const { test, expect } = require('@playwright/test');

test('OTP login and save storage state', async ({ page }) => {

  // 1. Open OTP login page
  await page.goto('https://practice.expandtesting.com/otp-login');

  // 2. Enter email
  await page.fill('#email', 'practice@expandtesting.com');
  await page.click('button[type="submit"]');

  // 3. Enter OTP
  await page.fill('#otp', '214365');
  await page.click('button[type="submit"]');

  // 4. Validate successful login
  await expect(page).toHaveURL(/secure/);
  // await expect(
  //   page.locator('text=You logged into a secure area!')
  // ).toBeVisible();

  // 5. Save authenticated state
  await page.context().storageState({
    path: 'playwright/.auth/otpUser.json',
  });

  await page.waitForTimeout(2000);
});
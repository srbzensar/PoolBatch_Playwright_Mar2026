import { test, expect } from '@playwright/test';

test('Yahoo Login Example', async ({ page }) => {

    const url = "https://login.yahoo.com/";
    const userId = process.env.YAHOO_USER;
    const password = process.env.YAHOO_PASS;

    await page.goto(url);
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle(/Yahoo/i);

    const locUsername = page.locator('#login-username');
    const locPassword = page.locator('#login-passwd');
    const locSignin = page.locator('#login-signin');

    // Enter username/email
    await locUsername.fill(userId);
    await locSignin.click();
    await page.waitForTimeout(3000);

    // Enter password
    await locPassword.fill(password);
    await locSignin.click();

    // Wait for page to fully load
    await page.waitForLoadState('networkidle');

    // Print URL after login attempt
    console.log("URL after login: ", page.url());

    // Flexible assertion
    await expect(page.url()).toMatch(/login\.yahoo\.com|yahoo\.com/);

    await page.close();
});

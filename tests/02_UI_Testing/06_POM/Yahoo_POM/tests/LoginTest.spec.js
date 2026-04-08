import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';


test('Yahoo Login using POM with login() method', async ({ page }) => {
    const url = "https://login.yahoo.com/";
    const userId = process.env.YAHOO_USER;
    const password = process.env.YAHOO_PASS;

    const loginPage = new LoginPage(page);

    await loginPage.navigate(url);
    const actualTitle = await loginPage.getTitle();
    expect(actualTitle).toMatch(/Yahoo/i);

    // Single method for login
    await loginPage.login(userId, password);

    const currentUrl = await loginPage.getCurrentUrl();
    console.log("URL after login:", currentUrl);

    expect(currentUrl).toMatch(/login\.yahoo\.com|yahoo\.com/);

    await page.close();
});
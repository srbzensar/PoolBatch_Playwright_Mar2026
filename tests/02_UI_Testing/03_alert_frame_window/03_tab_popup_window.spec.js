import { test, expect } from '@playwright/test';

test.skip('Handle New Tab', async ({ context, page }) => {

    const url = "https://demoqa.com/links";
    await page.goto(url);
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle(/demo/i);

    // Listen for page 
    const [newTab] = await Promise.all([   // here we are registering two events, so using promise.all()
        context.waitForEvent('page'),
        page.click('#simpleLink')  // this will open a new tab
    ]);

    newTab.waitForLoadState();
    console.log('New tab URL: ', newTab.url());
    expect(newTab.url()).toContain('demoqa.com');

    await page.waitForTimeout(3000);
    
    // close new tab
    await newTab.close();
    
    // switch back to the main page
    await page.bringToFront();  // ensre the main page is active again.
    console.log('Main page URL: ', page.url());
    await page.waitForTimeout(3000);

    await page.close();
});


test.skip('Handle Popup window', async ({ context, page }) => {

    const url = "https://demoqa.com/browser-windows";
    await page.goto(url);
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle(/demo/i);

    const [popup] = await Promise.all([
        context.waitForEvent('page'),
        page.click('#windowButton')  // opens the popup 
    ]);

    popup.waitForLoadState();
    console.log('Popup URL: ', popup.url());
    expect(popup.url()).toContain('demoqa.com');

    console.log('Popup Text: ', await popup.locator('#sampleHeading').textContent());

    await popup.waitForTimeout(3000);
    
    // close popup
    await popup.close();
    
    // switch back to the main page
    await page.bringToFront();  // ensre the main page is active again.
    console.log('Main page URL: ', page.url());

    await page.waitForTimeout(3000);
    await page.close();
});


test('Handle new window', async ({ browser }) => {

    // const url = "https://demoqa.com/browser-windows";
    const url = "https://www.wikipedia.org/";
    const context1 = await browser.newContext();
    const page = await context1.newPage();
    await page.goto(url);
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle(/wikipedia/i);
    console.log('Main page URL: ', page.url());

    // ---------------------------------------------------

    const url2 = "https://the-internet.herokuapp.com/";
    const context2 = await browser.newContext();
    const newPage = await context2.newPage();
    newPage.waitForLoadState();

    await newPage.goto(url2);
    await newPage.setViewportSize({ width: 1024, height: 768 });
    // await newPage.waitForTimeout(3000);

    await expect(newPage).toHaveTitle(/Internet/i);

    console.log('New page URL: ', newPage.url());

    await newPage.waitForTimeout(3000);
    
    // close the new window
    await context2.close();
    
    // switch back to the main page
    await page.bringToFront();  // ensre the main page is active again.
    console.log('Main page URL: ', page.url());
    await page.waitForTimeout(3000);

    await page.close();
});
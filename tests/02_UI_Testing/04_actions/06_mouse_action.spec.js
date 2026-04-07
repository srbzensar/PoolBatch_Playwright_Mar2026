import { test, expect } from '@playwright/test';

test('Mouse Actions on DemoQA Buttons', async ({ page }) => {

    // Set URL and navigate
    const url = "https://demoqa.com/buttons";
    await page.goto(url);
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.waitForTimeout(3000);

    // Validate page title
    await expect(page).toHaveTitle(/DemoQA/i);

    await page.waitForTimeout(2000);
    // ------------------------------------

    // Locate buttons
    const doubleClickBtn = page.locator('#doubleClickBtn');
    const rightClickBtn = page.locator('#rightClickBtn');
    const clickMeBtn = page.getByRole('button', { name: 'Click Me', exact: true }); 
    // or
    // const clickMeBtn = page.locator('button', { hasText: /^Click Me$/ });

    // const clickMeBtn = page.getByRole('button', { name: 'Click Me', exact: false }); 
    // const clickMeBtn = page.locator('button', { hasText: /Click Me/ });

    // Perform Double Click
    const dblBox = await doubleClickBtn.boundingBox();
    await page.mouse.move(dblBox.x + dblBox.width / 2, dblBox.y + dblBox.height / 2);
    await page.mouse.dblclick(dblBox.x + dblBox.width / 2, dblBox.y + dblBox.height / 2);
    console.log('Performed Double Click');

    // Validate message
    const dblMsg = await page.locator('#doubleClickMessage').textContent();
    console.log('Double Click Message:', dblMsg.trim());
    expect(dblMsg.trim()).toContain('double click');

    await page.waitForTimeout(2000);

    // Perform Right Click
    const rightBox = await rightClickBtn.boundingBox();
    await page.mouse.click(rightBox.x + rightBox.width / 2, rightBox.y + rightBox.height / 2, { button: 'right' });
    console.log('Performed Right Click');

    // Validate message
    const rightMsg = await page.locator('#rightClickMessage').textContent();
    console.log('Right Click Message:', rightMsg.trim());
    expect(rightMsg.trim()).toContain('right click');

    await page.waitForTimeout(2000);

    // Perform Single Click
    await clickMeBtn.click();
    console.log('Performed Single Click');

    // Validate message
    const clickMsg = await page.locator('#dynamicClickMessage').textContent();
    console.log('Single Click Message:', clickMsg.trim());
    expect(clickMsg.trim()).toContain('dynamic click');

    // -------------------------------------
    await page.waitForTimeout(3000);

    await page.close();
});
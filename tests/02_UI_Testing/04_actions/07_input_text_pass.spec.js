import { test, expect } from '@playwright/test';


test('Fill Text and Password Inputs with Advanced Methods', async ({ page }) => {

    // Set URL and navigate
    const url = "https://dd-demo-tau.vercel.app/web_elements.html#1-text-input";
    await page.goto(url);
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.waitForTimeout(3000);

    // Validate page title
    await expect(page).toHaveTitle(/Playwright/i);

    await page.waitForTimeout(2000);
    // ------------------------------------

    // Locate input fields using different strategies
    const nameInput = page.locator('#textInputField'); // CSS selector
    const passwordInput = page.getByLabel('Password'); // Using label text

    // Fill text input using fill()
    await nameInput.fill('Sunil Bansal');
    console.log('Filled Name input with: Sunil Bansal');

    await page.waitForTimeout(2000);

    // Type password character by character using type()
    await passwordInput.type('MySecurePassword123', { delay: 100 });
    console.log('Typed Password input with: MySecurePassword123');

    // Validate entered values
    const enteredName = await nameInput.inputValue();
    const enteredPassword = await passwordInput.inputValue();
    console.log(`Entered Name: ${enteredName}, Entered Password: ${enteredPassword}`);

    expect(enteredName).toBe('Sunil Bansal');
    expect(enteredPassword).toBe('MySecurePassword123');

    // -------------------------------------
    await page.waitForTimeout(3000);

    await page.close();
});
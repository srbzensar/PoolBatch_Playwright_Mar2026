import { test, expect } from '@playwright/test';

test('Multi-Select Dropdown Example', async ({ page }) => {

    // Set URL and navigate
    const url = "https://dd-demo-tau.vercel.app/web_elements.html#8-multiselect";
    await page.goto(url);
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.waitForTimeout(3000);

    // Validate page title
    await expect(page).toHaveTitle(/Playwright/i);

    await page.waitForTimeout(2000);
    // ------------------------------------

    // Locate multi-select dropdown
    const multiSelect = page.locator('#multiSelectField');

    // Validate all available options and sequence
    const allOptions = await multiSelect.locator('option').allTextContents();
    console.log('Available options:', allOptions);
    expect(allOptions).toEqual(['Apple', 'Banana', 'Mango']); // Expected sequence

    await page.waitForTimeout(2000);

    // Select multiple options by value
    await multiSelect.selectOption(['Apple', 'Mango']);
    console.log('Selected options: Apple and Mango');

    await page.waitForTimeout(2000);

    // Validate selected values
    const selectedValues = await multiSelect.evaluate(el => Array.from(el.selectedOptions).map(opt => opt.text));
    console.log('Currently selected values:', selectedValues);
    expect(selectedValues).toEqual(['Apple', 'Mango']);

    // -------------------------------------
    await page.waitForTimeout(3000);

    await page.close();
});


import { test, expect } from '@playwright/test';
import { listFrameNames } from '../../../utils/frameUtils';

test('Frames example', async ({ page }) => {

    const url = "https://demoqa.com/frames";
    await page.goto(url);
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle(/demo/i);
    // ------------------------------------------

    //   // Access frame by name or selector
    //    page.frame({ name: 'frameName' }); // by name

    const names = await listFrameNames(page, 'demoqa.com'); // Only frames from demoqa.com
    console.log('Frames found:', names);

    const frame = page.frame({ name: 'frame1' }); // Accessing frame by name, cannot use selector here
    if (frame) {
            const headingText = await frame.locator('#sampleHeading').textContent();
            console.log('Text inside frame:', headingText);
    }

    // access frame by frameLocator
    const frame1 = page.frameLocator('#frame1');
    // const frame1 = page.frame('#frame1');
    const headingText = await frame1.locator('#sampleHeading').textContent();
    console.log('Text inside frame:', headingText);

    // switch back to main page
    const parentTitle = await page.title();
    console.log('Parent Page Title:', parentTitle);

    // ---------------------------------------
    await page.waitForTimeout(3000);    
    await page.close();
});
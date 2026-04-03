import { test, expect } from '@playwright/test';

test('run tests', async ({ page }) => {

  // Navigate to wikipedia
  await page.goto('https://www.wikipedia.org/');
  await page.waitForTimeout(3000);  // wait to see the action (debug/ demo purpose)
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Wikipedia/);

    // close browser window - closes the page
    await page.close();

    // How to run the tests?
    // npx playwright test tests/01_basics/00_run_tests.spec.js
    // by default tests run in headless mode (without UI) for faster execution and CI environments.

    // Why use npx?
    // npx runs Playwright without needing a global install. It uses the local version from your project.

    // To run tests in headed mode (with browser UI), use the --headed flag:
    // This is useful for debugging and seeing the test actions in real-time.
    // npx playwright test tests/01_basics/00_run_tests.spec.js --headed
    // or simply
    // npx playwright test tests/01_basics/00 --headed
    

    // How to run tests using npm run test?
    // Add a script in package.json like this:
    // "scripts": {
    //   "test": "playwright test",
    //   "th": "npx playwright test --headed"
    // }
    // Then run:
    // npm run th  -- tests/01_basics/00 
    // or simply
    // npm run th  -- 01_basics/00 

    // to clean previous test results before running new tests, you can add below script in package.json
    // "scripts": {
    //   "clean": "rd /s /q test-results",   
    //   "test": "npm run clean && npx playwright test"
    // }
    // "rd /s /q test-results" is for Windows OS to delete the contents of the test-results folder
    // For Unix-based systems (Linux, macOS), use:
    // "clean": "rm -rf test-results/*"


});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    const url = 'https://www.wikipedia.org/';

  await page.goto(url);
  await expect(page.getByRole('navigation', { name: 'Top languages' })).toBeVisible();

  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).fill('playwright');
  await page.getByRole('link', { name: 'Playwright (software) End-to-' }).click();
  await expect(page.getByRole('navigation', { name: 'Appearance' })).toBeVisible();

  await page.locator('#firstHeading').getByText('Playwright (software)').click();
  await expect(page.locator('#mw-content-text')).toContainText('Playwright');
  await expect(page.locator('#firstHeading')).toContainText('Playwright (software)');
});
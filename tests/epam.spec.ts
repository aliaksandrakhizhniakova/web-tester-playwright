import { test, expect } from '@playwright/test';

test('EPAM website client work test', async ({ page }) => {
  // Step 1: Go to https://www.epam.com/
  await page.goto('https://www.epam.com/');

  // Step 2: Click Services in header
  await page.getByRole('link', { name: 'Services' }).click();

  // Step 3: Click Explore Our Client Work
  await page.getByRole('link', { name: 'Explore our client work' }).click();

  // Step 4: Verify Client Work text is visible
  const clientWorkText = await page.getByText('Client Work');
  await expect(clientWorkText).toBeVisible();
});
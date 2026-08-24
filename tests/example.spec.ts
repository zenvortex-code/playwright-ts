import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('navigation menu', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Check nav links: Docs, MCP, CLI, API
  await expect(page.getByRole('link', { name: 'Docs', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'MCP', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'CLI', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'API', exact: true })).toBeVisible();
});

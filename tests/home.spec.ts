// tests/home.spec.ts
// Tests E2E de la página principal de LinguaQuest

import { test, expect } from '@playwright/test';

test.describe('HomePage', () => {

  test('debe cargar la página principal correctamente', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/LinguaQuest/);
  });

  test('debe mostrar el logo y nombre de la app', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.lq-logo-text')).toBeVisible();
    await expect(page.locator('.lq-logo-text')).toHaveText('LinguaQuest');
  });

  test('debe mostrar las 4 quest cards', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('.lq-quest-card');
    await expect(cards).toHaveCount(4);
  });

  test('debe navegar a Vocabulary Quest al hacer clic', async ({ page }) => {
    await page.goto('/');
    await page.locator('.q-teal').click();
    await expect(page).toHaveURL(/quest\/vocabulary/);
  });

});
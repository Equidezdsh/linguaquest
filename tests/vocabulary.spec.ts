// tests/vocabulary.spec.ts
// Tests E2E de la Vocabulary Quest — flashcards

import { test, expect } from '@playwright/test';

test.describe('Vocabulary Quest', () => {

  test('debe cargar la página de vocabulario', async ({ page }) => {
    await page.goto('/quest/vocabulary');
    await expect(page.locator('.vq-title')).toBeVisible();
    await expect(page.locator('.vq-title')).toContainText('Vocabulary Quest');
  });

  test('debe mostrar la primera flashcard', async ({ page }) => {
    await page.goto('/quest/vocabulary');
    await expect(page.locator('.vq-word')).toBeVisible();
    await expect(page.locator('.vq-scene')).toBeVisible();
  });

  test('debe voltear la tarjeta al hacer clic', async ({ page }) => {
    await page.goto('/quest/vocabulary');

    // Antes del clic — los botones NO son visibles
    await expect(page.locator('.vq-answer-btns')).not.toHaveClass(/visible/);

    // Clic en la tarjeta
    await page.locator('.vq-scene').click();

    // Después del clic — aparece la traducción y los botones
    await expect(page.locator('.vq-translation')).toBeVisible();
    await expect(page.locator('.vq-answer-btns')).toHaveClass(/visible/);
  });

 test('debe avanzar a la siguiente tarjeta al responder', async ({ page }) => {
  await page.goto('/quest/vocabulary');

  // Leer la primera palabra
  const firstWord = await page.locator('.vq-word').innerText();

  // Voltear y responder
  await page.locator('.vq-scene').click();
  await expect(page.locator('.vq-answer-btns')).toHaveClass(/visible/);
  await page.locator('.vq-btn-correct').click();

  // Esperar a que la palabra cambie (más confiable que waitForTimeout)
  await expect(page.locator('.vq-word')).not.toHaveText(firstWord, { timeout: 3000 });

  // Verificar que cambió
  const secondWord = await page.locator('.vq-word').innerText();
  expect(firstWord).not.toBe(secondWord);
});

  test('debe mostrar el botón volver al mapa', async ({ page }) => {
    await page.goto('/quest/vocabulary');
    await expect(page.locator('.vq-back-btn')).toBeVisible();
    await expect(page.locator('.vq-back-btn')).toContainText('Quest Map');
  });

  test('debe navegar de vuelta al home', async ({ page }) => {
    await page.goto('/quest/vocabulary');
    await page.locator('.vq-back-btn').click();
    await expect(page).toHaveURL('/');
  });

});
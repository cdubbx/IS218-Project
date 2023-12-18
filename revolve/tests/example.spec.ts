import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('% OFF ON YOUR FIRST ORDER!').click();
  await page.getByRole('link', { name: 'Sign Up' }).click();
  await page.getByRole('img', { name: 'hero img' }).click();
  await page.getByRole('img', { name: 'One of the best watches on' }).click();
  await page.getByRole('img', { name: 'Better than PS5 controller,' }).click();
  await page.getByRole('img', { name: 'The best budget fridge on the' }).click();
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('link', { name: 'About' }).click();
});
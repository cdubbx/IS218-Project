import { test, expect } from '@playwright/test';

const localhost = "http://localhost:3000";

test("Page title is correct", async ({ page }) => {
    await page.goto(localhost);
    expect(await page.title()).toBe("Revolve");
});

test("CSS is present", async ({ page }) => {
    await page.goto(localhost);
    const cssLink = await page.$('link[rel="stylesheet"]');
    expect(cssLink).not.toBeNull();
});
    
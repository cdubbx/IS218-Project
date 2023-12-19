import { test, expect } from '@playwright/test';

const localhost = "https://is-218-project.vercel.app/";

test("Page title is correct", async ({ page }) => {
    await page.goto(localhost);
    expect(await page.title()).toBe("Revolve");
});

test("CSS is present", async ({ page }) => {
    await page.goto(localhost);
    const cssLink = await page.$('link[rel="stylesheet"]');
    expect(cssLink).not.toBeNull();
});

test("Meta description is present", async ({ page }) => {
    await page.goto(localhost);
    const metaDescription = await page.$('meta[name="description"]');
    expect(metaDescription).not.toBeNull();
});

test("UTF-8 meta tag is present", async ({ page }) => {
    await page.goto(localhost);
    const utf8MetaTag = await page.$('meta[charset="UTF-8"]');
    expect(utf8MetaTag).not.toBeNull();
});

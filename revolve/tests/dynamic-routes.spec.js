import { test, expect } from "@playwright/test";

const localhost = "http://localhost:3000";

test("post contains post data", async ({ page }) => {
    await page.goto(localhost);
    for (const li of await page.getByRole("listitem").getByRole("link").all()) {
      await li.click();
      await expect(page.locator("main>article>div>time")).toContainText(
        /^[\w\s]+ ([1-9]|[12][0-9]|3[01]), (19|20)\d{2}$/
      );
      await page.goto(localhost);
    }
  });

  test("home page links go to page", async ({ page }) => {
    await page.goto(localhost);
    for (const li of await page.getByRole("listitem").getByRole("link").all()) {
      await li.click();
      await page.getByRole("link").last().click();
      await expect(page).toHaveURL(localhost);
    }
  });

  test('hero text is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('% OFF ON YOUR FIRST ORDER!').click();
  });

test('hero button is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByRole('button', { name: 'Sign Up' }).click();
});

test ('hero image is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByRole('img', { name: 'img' }).click();
});

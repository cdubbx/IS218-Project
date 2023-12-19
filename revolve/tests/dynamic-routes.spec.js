import { test, expect } from "@playwright/test";

const localhost = "https://is-218-project.vercel.app/";

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

test('Apple Watch product details is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('One of the best watches on').click();
  });

test ('Xbox Series S Controller product details button is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('Better than PS5 controller, the best controller on the market').click();
});

test ('Mini Fridge product details button is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('The best budget fridge on the market').click();
});

test ('65 inch TV, with very high resolution product details button is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('65 inch TV, with very high resolution').click();
});

test ('test that footer text is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('Get 10% off your first purchase').click();
});

test ('test that Home in navbar is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('Home').click();
});

test ('test that Sign Up in navbar is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('Sign Up').click();
});

test ('test that About in navbar is present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('About').click();
});

test ('test that cookie banner present', async ({ page }) => {
    await page.goto(localhost);
    await page.getByText('Accept').click();
});

test ('test that Sign up for Emails text is present', async ({ page }) => {
    await page.goto("https://is-218-project.vercel.app/contact");
    await page.getByText('Sign up for Emails').click();
});

test ('test that Sign up for Emails button is present', async ({ page }) => {
    await page.goto("https://is-218-project.vercel.app/contact");
    await page.getByRole('button', { name: 'Sign Up' }).click();
});

test ('test that footer text is present on contact page', async ({ page }) => {
    await page.goto("https://is-218-project.vercel.app/contact");
    await page.getByText('100 MLK BLVD').click();
});

test ('test that Our Story heading text is present on About page', async ({ page }) => {
    await page.goto("https://is-218-project.vercel.app/about");
    await page.getByText('Our Story').click();
});

test ('test that Our Story body text is present on About page', async ({ page }) => {
    await page.goto("https://is-218-project.vercel.app/about");
    await page.getByText('Launched in 2023').click();
});

test ('test that promo text is present on About page', async ({ page }) => {
    await page.goto("https://is-218-project.vercel.app/about");
    await page.getByText('Fast and Free Delivery').click();
});

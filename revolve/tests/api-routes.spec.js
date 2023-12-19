import { test, expect } from '@playwright/test';

const localhost = "https://is-218-project.vercel.app/";

test("simple api endpoint", async ({ request }) => {
  const response = await request.get(`${localhost}/src/app/api/subscribe/route`);
  expect(response.ok()).toBeFalsy();
  
}); 
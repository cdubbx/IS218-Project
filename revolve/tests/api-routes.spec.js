import { test, expect } from '@playwright/test';

const localhost = "http://localhost:3000";

test("simple api endpoint", async ({ request }) => {
  const response = await request.get(`${localhost}/src/app/api/subscribe/route`);
  expect(response.ok()).toBeFalsy();
  
}); 
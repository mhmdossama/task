import { test, expect, request } from '@playwright/test';

// API Test: Retrieve and Validate User Data from JSONPlaceholder

test('GET /posts/1 returns valid user data', async ({ request }) => {
  // Send GET request to the endpoint
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  // Validate HTTP Status Code
  expect(response.status()).toBe(200);

  // Validate Response Headers
  expect(response.headers()['content-type']).toContain('application/json; charset=utf-8');

  // Parse and Validate Response Body Structure
  const data = await response.json();
  expect(typeof data).toBe('object');
  expect(data).toHaveProperty('userId');
  expect(data).toHaveProperty('id');
  expect(data).toHaveProperty('title');
  expect(data).toHaveProperty('body');
  expect(typeof data.userId).toBe('number');
  expect(typeof data.id).toBe('number');
  expect(typeof data.title).toBe('string');
  expect(typeof data.body).toBe('string');

  // Validate Response Body Content
  expect(data.id).toBe(1);
    expect(data.userId).toBe(1);
  expect(data.title).not.toBe('');
  expect(data.body).not.toBe('');
});

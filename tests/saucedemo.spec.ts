import { test, expect } from '@playwright/test';

// UI Automation: SauceDemo - User Login and Purchase Workflow
test('Standard user can log in, add item to cart, and complete checkout', async ({ page }) => {
  // Step 1: Navigate to the Website
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Login
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 3: Verification after Login
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Step 4: Add Item to Cart
  const backpack = page.getByText('Sauce Labs Backpack', { exact: true });
  await expect(backpack).toBeVisible();
  
  const backpackContainer = page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' });
  await backpackContainer.getByRole('button', { name: 'Add to cart' }).click();
  // Verify cart badge
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Step 5: Navigate to Checkout
  await page.locator('.shopping_cart_link').click();
  await expect(page).toHaveURL(/.*\/cart\.html$/);
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  await page.getByRole('button', { name: 'Checkout' }).click();

  // Step 6: Fill Checkout Information
  await expect(page).toHaveURL(/.*\/checkout-step-one\.html$/);
  await page.getByPlaceholder('First Name').fill('John');
  await page.getByPlaceholder('Last Name').fill('Doe');
  await page.getByPlaceholder('Zip\/Postal Code').fill('12345');
  await page.getByRole('button', { name: 'Continue' }).click();

  // Step 7: Final Verification
  await expect(page).toHaveURL(/.*\/checkout-step-two\.html$/);
  // Assert total price label exists and has a value
  const totalLabel = page.locator('.summary_total_label[data-test="total-label"]');
  await expect(totalLabel).toBeVisible();
  console.log('Total Price label is visible');

  const totalValue = await totalLabel.textContent();
  expect(totalValue).toMatch(/Total: \$\d+\.\d{2}/);
  console.log('Total Price:', totalValue);
});

import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Signup functionality', async ({ page }) => {
  const username = `user_${Math.random().toString(36).substring(2, 10)}`;
  const password = `pass_${Math.random().toString(36).substring(2, 10)}`;

  // Save credentials to a JSON file
  const credentials = { username, password };
  fs.writeFileSync('credentials.json', JSON.stringify(credentials, null, 2));

  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill(username);
  await page.getByRole('textbox', { name: 'Password:' }).fill(password);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.waitForTimeout(2000); // Wait for the dialog to appear
  page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  await expect(page.getByRole('link', { name: `Sign up` })).toBeVisible();

});

test('Login functionality', async ({ page }) => {
  const credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf-8'));
  const { username, password } = credentials;

  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill(username);
  console.log(username);
  await page.locator('#loginpassword').fill(password);
  console.log(password);
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: `Welcome ${username}` })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
});

test('Add multiple products to cart and place an order', async ({ page }) => {
  test.slow();
  const orderDetails = {
    name: 'John Doe',
    country: 'USA',
    city: 'New York',
    creditCard: '1234567890123456',
    month: '12',
    year: '2025',
  };
  fs.writeFileSync('orderDetails.json', JSON.stringify(orderDetails, null, 2));

  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Nokia lumia' }).click();
  page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Nexus' }).click();
  page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await expect(page.getByRole('cell', { name: 'Nokia lumia' })).toBeVisible();
  // await expect(page.getByRole('cell', { name: 'Samsung galaxy s6' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Nexus' })).toBeVisible();
  await page.getByRole('button', { name: 'Place Order' }).click();

  // Fill order details
  await page.getByRole('textbox', { name: 'Name:' }).fill(orderDetails.name);
  await page.getByRole('textbox', { name: 'Country:' }).fill(orderDetails.country);
  await page.getByRole('textbox', { name: 'City:' }).fill(orderDetails.city);
  await page.getByRole('textbox', { name: 'Credit card:' }).fill(orderDetails.creditCard);
  await page.getByRole('textbox', { name: 'Month:' }).fill(orderDetails.month);
  await page.getByRole('textbox', { name: 'Year:' }).fill(orderDetails.year);
  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
});

test('Verify product prices', async ({ page }) => {
  test.slow();
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  const product1Price = parseInt((await page.getByRole('heading', { name: /\$360/ }).textContent()).replace('$', ''));
  page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  console.log(product1Price);
  const totalPrice = product1Price
  await page.waitForSelector('#totalp', { state: 'visible' });
  const price = await page.locator('#totalp').textContent();
  expect(parseInt(price.trim())).toBe(totalPrice);

});

test('Cross-category product selection and purchase', async ({ page }) => {
  const orderDetails = JSON.parse(fs.readFileSync('orderDetails.json', 'utf-8'));

  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.goBack()
  await page.goBack()
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.getByRole('link', { name: 'Sony vaio i5' }).click();
  page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.goBack()
  await page.goBack()
  await page.getByRole('link', { name: 'Monitors' }).click();
  await page.getByRole('link', { name: 'Apple monitor' }).click();
  page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  // await expect(page.getByRole('cell', { name: 'Samsung galaxy s6' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Sony vaio i5' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Apple monitor' })).toBeVisible();
  await page.getByRole('button', { name: 'Place Order' }).click();

  // Fill order details again
  await page.getByRole('textbox', { name: 'Name:' }).fill(orderDetails.name);
  await page.getByRole('textbox', { name: 'Country:' }).fill(orderDetails.country);
  await page.getByRole('textbox', { name: 'City:' }).fill(orderDetails.city);
  await page.getByRole('textbox', { name: 'Credit card:' }).fill(orderDetails.creditCard);
  await page.getByRole('textbox', { name: 'Month:' }).fill(orderDetails.month);
  await page.getByRole('textbox', { name: 'Year:' }).fill(orderDetails.year);
  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
});

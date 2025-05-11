# Test info

- Name: Verify product prices
- Location: C:\Users\Mahesh Gachale\Desktop\Advanced_Projects\E-Commerce Website Automation\tests\Automation.spec.js:80:5

# Error details

```
Error: page.waitForSelector: Target page, context or browser has been closed
Call log:
  - waiting for locator('#totalp') to be visible
    118 × locator resolved to hidden <h3 id="totalp" class="panel-title"></h3>

    at C:\Users\Mahesh Gachale\Desktop\Advanced_Projects\E-Commerce Website Automation\tests\Automation.spec.js:90:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import fs from 'fs';
   3 |
   4 | test('Signup functionality', async ({ page }) => {
   5 |   const username = `user_${Math.random().toString(36).substring(2, 10)}`;
   6 |   const password = `pass_${Math.random().toString(36).substring(2, 10)}`;
   7 |
   8 |   // Save credentials to a JSON file
   9 |   const credentials = { username, password };
   10 |   fs.writeFileSync('credentials.json', JSON.stringify(credentials, null, 2));
   11 |
   12 |   await page.goto('https://www.demoblaze.com/');
   13 |   await page.getByRole('link', { name: 'Sign up' }).click();
   14 |   await page.getByRole('textbox', { name: 'Username:' }).fill(username);
   15 |   await page.getByRole('textbox', { name: 'Password:' }).fill(password);
   16 |   await page.getByRole('button', { name: 'Sign up' }).click();
   17 |   await page.waitForTimeout(2000); // Wait for the dialog to appear
   18 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
   19 |   await expect(page.getByRole('link', { name: `Sign up` })).toBeVisible();
   20 |
   21 | });
   22 |
   23 | test('Login functionality', async ({ page }) => {
   24 |   const credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf-8'));
   25 |   const { username, password } = credentials;
   26 |
   27 |   await page.goto('https://www.demoblaze.com/');
   28 |   await page.getByRole('link', { name: 'Log in' }).click();
   29 |   await page.locator('#loginusername').fill(username);
   30 |   console.log(username);
   31 |   await page.locator('#loginpassword').fill(password);
   32 |   console.log(password);
   33 |   await page.getByRole('button', { name: 'Log in' }).click();
   34 |   await expect(page.getByRole('link', { name: `Welcome ${username}` })).toBeVisible();
   35 |   await page.getByRole('link', { name: 'Log out' }).click();
   36 |   await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
   37 | });
   38 |
   39 | test('Add multiple products to cart and place an order', async ({ page }) => {
   40 |   test.slow();
   41 |   const orderDetails = {
   42 |     name: 'John Doe',
   43 |     country: 'USA',
   44 |     city: 'New York',
   45 |     creditCard: '1234567890123456',
   46 |     month: '12',
   47 |     year: '2025',
   48 |   };
   49 |   fs.writeFileSync('orderDetails.json', JSON.stringify(orderDetails, null, 2));
   50 |
   51 |   await page.goto('https://www.demoblaze.com/');
   52 |   await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
   53 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
   54 |   await page.getByRole('link', { name: 'Add to cart' }).click();
   55 |   await page.goto('https://www.demoblaze.com/');
   56 |   await page.getByRole('link', { name: 'Nokia lumia' }).click();
   57 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
   58 |   await page.getByRole('link', { name: 'Add to cart' }).click();
   59 |   await page.goto('https://www.demoblaze.com/');
   60 |   await page.getByRole('link', { name: 'Nexus' }).click();
   61 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
   62 |   await page.getByRole('link', { name: 'Add to cart' }).click();
   63 |   await page.getByRole('link', { name: 'Cart', exact: true }).click();
   64 |   await expect(page.getByRole('cell', { name: 'Nokia lumia' })).toBeVisible();
   65 |   // await expect(page.getByRole('cell', { name: 'Samsung galaxy s6' })).toBeVisible();
   66 |   await expect(page.getByRole('cell', { name: 'Nexus' })).toBeVisible();
   67 |   await page.getByRole('button', { name: 'Place Order' }).click();
   68 |
   69 |   // Fill order details
   70 |   await page.getByRole('textbox', { name: 'Name:' }).fill(orderDetails.name);
   71 |   await page.getByRole('textbox', { name: 'Country:' }).fill(orderDetails.country);
   72 |   await page.getByRole('textbox', { name: 'City:' }).fill(orderDetails.city);
   73 |   await page.getByRole('textbox', { name: 'Credit card:' }).fill(orderDetails.creditCard);
   74 |   await page.getByRole('textbox', { name: 'Month:' }).fill(orderDetails.month);
   75 |   await page.getByRole('textbox', { name: 'Year:' }).fill(orderDetails.year);
   76 |   await page.getByRole('button', { name: 'Purchase' }).click();
   77 |   await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
   78 | });
   79 |
   80 | test('Verify product prices', async ({ page }) => {
   81 |   test.slow();
   82 |   await page.goto('https://www.demoblaze.com/');
   83 |   await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
   84 |   const product1Price = parseInt((await page.getByRole('heading', { name: /\$360/ }).textContent()).replace('$', ''));
   85 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
   86 |   await page.getByRole('link', { name: 'Add to cart' }).click();
   87 |   await page.getByRole('link', { name: 'Cart', exact: true }).click();
   88 |   console.log(product1Price);
   89 |   const totalPrice = product1Price
>  90 |   await page.waitForSelector('#totalp', { state: 'visible' });
      |              ^ Error: page.waitForSelector: Target page, context or browser has been closed
   91 |   const price = await page.locator('#totalp').textContent();
   92 |   expect(parseInt(price.trim())).toBe(totalPrice);
   93 |
   94 | });
   95 |
   96 | test('Cross-category product selection and purchase', async ({ page }) => {
   97 |   const orderDetails = JSON.parse(fs.readFileSync('orderDetails.json', 'utf-8'));
   98 |
   99 |   await page.goto('https://www.demoblaze.com/');
  100 |   await page.getByRole('link', { name: 'Phones' }).click();
  101 |   await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  102 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  103 |   await page.getByRole('link', { name: 'Add to cart' }).click();
  104 |   await page.goBack()
  105 |   await page.goBack()
  106 |   await page.getByRole('link', { name: 'Laptops' }).click();
  107 |   await page.getByRole('link', { name: 'Sony vaio i5' }).click();
  108 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  109 |   await page.getByRole('link', { name: 'Add to cart' }).click();
  110 |   await page.goBack()
  111 |   await page.goBack()
  112 |   await page.getByRole('link', { name: 'Monitors' }).click();
  113 |   await page.getByRole('link', { name: 'Apple monitor' }).click();
  114 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  115 |   await page.getByRole('link', { name: 'Add to cart' }).click();
  116 |   await page.getByRole('link', { name: 'Cart', exact: true }).click();
  117 |   // await expect(page.getByRole('cell', { name: 'Samsung galaxy s6' })).toBeVisible();
  118 |   await expect(page.getByRole('cell', { name: 'Sony vaio i5' })).toBeVisible();
  119 |   await expect(page.getByRole('cell', { name: 'Apple monitor' })).toBeVisible();
  120 |   await page.getByRole('button', { name: 'Place Order' }).click();
  121 |
  122 |   // Fill order details again
  123 |   await page.getByRole('textbox', { name: 'Name:' }).fill(orderDetails.name);
  124 |   await page.getByRole('textbox', { name: 'Country:' }).fill(orderDetails.country);
  125 |   await page.getByRole('textbox', { name: 'City:' }).fill(orderDetails.city);
  126 |   await page.getByRole('textbox', { name: 'Credit card:' }).fill(orderDetails.creditCard);
  127 |   await page.getByRole('textbox', { name: 'Month:' }).fill(orderDetails.month);
  128 |   await page.getByRole('textbox', { name: 'Year:' }).fill(orderDetails.year);
  129 |   await page.getByRole('button', { name: 'Purchase' }).click();
  130 |   await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
  131 | });
  132 |
```
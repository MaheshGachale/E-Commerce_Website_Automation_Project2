# Test info

- Name: Add multiple products to cart and place an order
- Location: C:\Users\Mahesh Gachale\Desktop\Advanced_Projects\E-Commerce Website Automation\tests\Automation.spec.js:42:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('cell', { name: 'Samsung galaxy s6' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByRole('cell', { name: 'Samsung galaxy s6' })

    at C:\Users\Mahesh Gachale\Desktop\Advanced_Projects\E-Commerce Website Automation\tests\Automation.spec.js:68:71
```

# Page snapshot

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: "#"
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
- heading "Products" [level=2]
- table:
  - rowgroup:
    - row "Pic Title Price x":
      - cell "Pic"
      - cell "Title"
      - cell "Price"
      - cell "x"
  - rowgroup:
    - row "Nexus 6 650 Delete":
      - cell:
        - img
      - cell "Nexus 6"
      - cell "650"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
    - row "Nokia lumia 1520 820 Delete":
      - cell:
        - img
      - cell "Nokia lumia 1520"
      - cell "820"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
- heading "Total" [level=2]
- heading "1470" [level=3]
- button "Place Order"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store 2017
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import fs from 'fs';
   3 |
   4 | // test('Signup functionality', async ({ page }) => {
   5 | //   const username = `user_${Math.random().toString(36).substring(2, 10)}`;
   6 | //   const password = `pass_${Math.random().toString(36).substring(2, 10)}`;
   7 |
   8 | //   // Save credentials to a JSON file
   9 | //   const credentials = { username, password };
   10 | //   fs.writeFileSync('credentials.json', JSON.stringify(credentials, null, 2));
   11 |
   12 | //   await page.goto('https://www.demoblaze.com/');
   13 | //   await page.getByRole('link', { name: 'Sign up' }).click();
   14 | //   await page.getByRole('textbox', { name: 'Username:' }).fill(username);
   15 | //   await page.getByRole('textbox', { name: 'Password:' }).fill(password);
   16 | //   await page.getByRole('button', { name: 'Sign up' }).click();
   17 | //   await page.waitForTimeout(2000); // Wait for the dialog to appear
   18 | //   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
   19 | //   await expect(page.getByRole('link', { name: `Sign up` })).toBeVisible();
   20 |
   21 | // });
   22 |
   23 | // test('Login functionality', async ({ page }) => {
   24 | //   const credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf-8'));
   25 | //   const { username, password } = credentials;
   26 |
   27 | //   await page.goto('https://www.demoblaze.com/');
   28 | //   await page.getByRole('link', { name: 'Log in' }).click();
   29 | //   await page.locator('#loginusername').fill(username);
   30 | //   console.log(username);
   31 | //   await page.locator('#loginpassword').fill(password);
   32 | //   console.log(password);
   33 | //   await page.getByRole('button', { name: 'Log in' }).click();
   34 | //   await expect(page.getByRole('link', { name: `Welcome ${username}` })).toBeVisible();
   35 | // });
   36 |
   37 | // test('Logout functionality', async ({ page }) => {
   38 | //   await page.getByRole('link', { name: 'Log out' }).click();
   39 | //   await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
   40 | // });
   41 |
   42 | test('Add multiple products to cart and place an order', async ({ page }) => {
   43 |   test.slow();
   44 |   const orderDetails = {
   45 |     name: 'John Doe',
   46 |     country: 'USA',
   47 |     city: 'New York',
   48 |     creditCard: '1234567890123456',
   49 |     month: '12',
   50 |     year: '2025',
   51 |   };
   52 |   fs.writeFileSync('orderDetails.json', JSON.stringify(orderDetails, null, 2));
   53 |
   54 |   await page.goto('https://www.demoblaze.com/');
   55 |   await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
   56 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
   57 |   await page.getByRole('link', { name: 'Add to cart' }).click();
   58 |   await page.goto('https://www.demoblaze.com/');
   59 |   await page.getByRole('link', { name: 'Nokia lumia' }).click();
   60 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
   61 |   await page.getByRole('link', { name: 'Add to cart' }).click();
   62 |   await page.goto('https://www.demoblaze.com/');
   63 |   await page.getByRole('link', { name: 'Nexus' }).click();
   64 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
   65 |   await page.getByRole('link', { name: 'Add to cart' }).click();
   66 |   await page.getByRole('link', { name: 'Cart', exact: true }).click();
   67 |   await expect(page.getByRole('cell', { name: 'Nokia lumia' })).toBeVisible();
>  68 |   await expect(page.getByRole('cell', { name: 'Samsung galaxy s6' })).toBeVisible();
      |                                                                       ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
   69 |   await expect(page.getByRole('cell', { name: 'Nexus' })).toBeVisible();
   70 |   await page.getByRole('button', { name: 'Place Order' }).click();
   71 |
   72 |   // Fill order details
   73 |   await page.getByRole('textbox', { name: 'Name:' }).fill(orderDetails.name);
   74 |   await page.getByRole('textbox', { name: 'Country:' }).fill(orderDetails.country);
   75 |   await page.getByRole('textbox', { name: 'City:' }).fill(orderDetails.city);
   76 |   await page.getByRole('textbox', { name: 'Credit card:' }).fill(orderDetails.creditCard);
   77 |   await page.getByRole('textbox', { name: 'Month:' }).fill(orderDetails.month);
   78 |   await page.getByRole('textbox', { name: 'Year:' }).fill(orderDetails.year);
   79 |   await page.getByRole('button', { name: 'Purchase' }).click();
   80 |   await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
   81 | });
   82 |
   83 | // test('Verify product prices', async ({ page }) => {
   84 | //   await page.goto('https://www.demoblaze.com/');
   85 | //   await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
   86 | //   const product1Price = parseInt((await page.getByRole('heading', { name: /\$360/ }).textContent()).replace('$', ''));
   87 | //   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
   88 | //   await page.getByRole('link', { name: 'Add to cart' }).click();
   89 | //   await page.goto('https://www.demoblaze.com/');
   90 | //   await page.getByRole('link', { name: 'Nokia lumia' }).click();
   91 | //   const product2Price = parseInt((await page.getByRole('heading', { name: /\$820/ }).textContent()).replace('$', ''));
   92 | //   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
   93 | //   await page.getByRole('link', { name: 'Add to cart' }).click();
   94 | //   await page.getByRole('link', { name: 'Cart', exact: true }).click();
   95 | //   const totalPrice = product1Price + product2Price;
   96 | //   await expect(page.getByRole('heading', { name: `${totalPrice}` })).toBeVisible();
   97 | // });
   98 |
   99 | // test('Cross-category product selection and purchase', async ({ page }) => {
  100 | //   const orderDetails = JSON.parse(fs.readFileSync('orderDetails.json', 'utf-8'));
  101 |
  102 | //   await page.goto('https://www.demoblaze.com/');
  103 | //   await page.getByRole('link', { name: 'Phones' }).click();
  104 | //   await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  105 | //   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  106 | //   await page.getByRole('link', { name: 'Add to cart' }).click();
  107 | //   await page.goto('https://www.demoblaze.com/');
  108 | //   await page.getByRole('link', { name: 'Laptops' }).click();
  109 | //   await page.getByRole('link', { name: 'Sony vaio i5' }).click();
  110 | //   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  111 | //   await page.getByRole('link', { name: 'Add to cart' }).click();
  112 | //   await page.getByRole('link', { name: 'Monitors' }).click();
  113 | //   await page.getByRole('link', { name: 'Apple monitor' }).click();
  114 | //   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  115 | //   await page.getByRole('link', { name: 'Add to cart' }).click();
  116 | //   await page.getByRole('link', { name: 'Cart', exact: true }).click();
  117 | //   await expect(page.getByRole('cell', { name: 'Samsung galaxy s6' })).toBeVisible();
  118 | //   await expect(page.getByRole('cell', { name: 'Sony vaio i5' })).toBeVisible();
  119 | //   await expect(page.getByRole('cell', { name: 'Apple monitor' })).toBeVisible();
  120 | //   await page.getByRole('button', { name: 'Place Order' }).click();
  121 |
  122 | //   // Fill order details again
  123 | //   await page.getByRole('textbox', { name: 'Name:' }).fill(orderDetails.name);
  124 | //   await page.getByRole('textbox', { name: 'Country:' }).fill(orderDetails.country);
  125 | //   await page.getByRole('textbox', { name: 'City:' }).fill(orderDetails.city);
  126 | //   await page.getByRole('textbox', { name: 'Credit card:' }).fill(orderDetails.creditCard);
  127 | //   await page.getByRole('textbox', { name: 'Month:' }).fill(orderDetails.month);
  128 | //   await page.getByRole('textbox', { name: 'Year:' }).fill(orderDetails.year);
  129 | //   await page.getByRole('button', { name: 'Purchase' }).click();
  130 | //   await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
  131 | // });
  132 |
```
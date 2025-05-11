# Test info

- Name: Logout functionality
- Location: C:\Users\Mahesh Gachale\Desktop\Advanced_Projects\E-Commerce Website Automation\tests\Automation.spec.js:32:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Log out' })

    at C:\Users\Mahesh Gachale\Desktop\Advanced_Projects\E-Commerce Website Automation\tests\Automation.spec.js:34:53
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
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "Second slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- link:
  - /url: prod.html?idp_=1
- heading "Samsung galaxy s6" [level=4]:
  - link "Samsung galaxy s6":
    - /url: prod.html?idp_=1
- heading "$360" [level=5]
- paragraph: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
- link:
  - /url: prod.html?idp_=2
- heading "Nokia lumia 1520" [level=4]:
  - link "Nokia lumia 1520":
    - /url: prod.html?idp_=2
- heading "$820" [level=5]
- paragraph: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
- link:
  - /url: prod.html?idp_=3
- heading "Nexus 6" [level=4]:
  - link "Nexus 6":
    - /url: prod.html?idp_=3
- heading "$650" [level=5]
- paragraph: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
- link:
  - /url: prod.html?idp_=4
- heading "Samsung galaxy s7" [level=4]:
  - link "Samsung galaxy s7":
    - /url: prod.html?idp_=4
- heading "$800" [level=5]
- paragraph: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
- link:
  - /url: prod.html?idp_=5
- heading "Iphone 6 32gb" [level=4]:
  - link "Iphone 6 32gb":
    - /url: prod.html?idp_=5
- heading "$790" [level=5]
- paragraph: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
- link:
  - /url: prod.html?idp_=6
- heading "Sony xperia z5" [level=4]:
  - link "Sony xperia z5":
    - /url: prod.html?idp_=6
- heading "$320" [level=5]
- paragraph: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
- link:
  - /url: prod.html?idp_=7
- heading "HTC One M9" [level=4]:
  - link "HTC One M9":
    - /url: prod.html?idp_=7
- heading "$700" [level=5]
- paragraph: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
- link:
  - /url: prod.html?idp_=8
- heading "Sony vaio i5" [level=4]:
  - link "Sony vaio i5":
    - /url: prod.html?idp_=8
- heading "$790" [level=5]
- paragraph: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
- link:
  - /url: prod.html?idp_=9
- heading "Sony vaio i7" [level=4]:
  - link "Sony vaio i7":
    - /url: prod.html?idp_=9
- heading "$790" [level=5]
- paragraph: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
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
   16 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
   17 |   await page.getByRole('button', { name: 'Sign up' }).click();
   18 | });
   19 |
   20 | test('Login functionality', async ({ page }) => {
   21 |   const credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf-8'));
   22 |   const { username, password } = credentials;
   23 |
   24 |   await page.goto('https://www.demoblaze.com/');
   25 |   await page.getByRole('link', { name: 'Log in' }).click();
   26 |   await page.locator('#loginusername').fill(username);
   27 |   await page.locator('#loginpassword').fill(password);
   28 |   await page.getByRole('button', { name: 'Log in' }).click();
   29 |   await expect(page.getByRole('link', { name: `Welcome ${username}` })).toBeVisible();
   30 | });
   31 |
   32 | test('Logout functionality', async ({ page }) => {
   33 |   await page.goto('https://www.demoblaze.com/');
>  34 |   await page.getByRole('link', { name: 'Log out' }).click();
      |                                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
   35 |   await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
   36 | });
   37 |
   38 | test('Add multiple products to cart and place an order', async ({ page }) => {
   39 |   const orderDetails = {
   40 |     name: 'John Doe',
   41 |     country: 'USA',
   42 |     city: 'New York',
   43 |     creditCard: '1234567890123456',
   44 |     month: '12',
   45 |     year: '2025',
   46 |   };
   47 |   fs.writeFileSync('orderDetails.json', JSON.stringify(orderDetails, null, 2));
   48 |
   49 |   await page.goto('https://www.demoblaze.com/');
   50 |   await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
   51 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
   52 |   await page.getByRole('link', { name: 'Add to cart' }).click();
   53 |   await page.goto('https://www.demoblaze.com/');
   54 |   await page.getByRole('link', { name: 'Nokia lumia' }).click();
   55 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
   56 |   await page.getByRole('link', { name: 'Add to cart' }).click();
   57 |   await page.goto('https://www.demoblaze.com/');
   58 |   await page.getByRole('link', { name: 'Nexus' }).click();
   59 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
   60 |   await page.getByRole('link', { name: 'Add to cart' }).click();
   61 |   await page.getByRole('link', { name: 'Cart', exact: true }).click();
   62 |   await expect(page.getByRole('cell', { name: 'Nokia lumia' })).toBeVisible();
   63 |   await expect(page.getByRole('cell', { name: 'Samsung galaxy s6' })).toBeVisible();
   64 |   await expect(page.getByRole('cell', { name: 'Nexus' })).toBeVisible();
   65 |   await page.getByRole('button', { name: 'Place Order' }).click();
   66 |
   67 |   // Fill order details
   68 |   await page.getByRole('textbox', { name: 'Name:' }).fill(orderDetails.name);
   69 |   await page.getByRole('textbox', { name: 'Country:' }).fill(orderDetails.country);
   70 |   await page.getByRole('textbox', { name: 'City:' }).fill(orderDetails.city);
   71 |   await page.getByRole('textbox', { name: 'Credit card:' }).fill(orderDetails.creditCard);
   72 |   await page.getByRole('textbox', { name: 'Month:' }).fill(orderDetails.month);
   73 |   await page.getByRole('textbox', { name: 'Year:' }).fill(orderDetails.year);
   74 |   await page.getByRole('button', { name: 'Purchase' }).click();
   75 |   await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
   76 | });
   77 |
   78 | test('Verify product prices', async ({ page }) => {
   79 |   await page.goto('https://www.demoblaze.com/');
   80 |   await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
   81 |   const product1Price = parseInt((await page.getByRole('heading', { name: /\$360/ }).textContent()).replace('$', ''));
   82 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
   83 |   await page.getByRole('link', { name: 'Add to cart' }).click();
   84 |   await page.goto('https://www.demoblaze.com/');
   85 |   await page.getByRole('link', { name: 'Nokia lumia' }).click();
   86 |   const product2Price = parseInt((await page.getByRole('heading', { name: /\$820/ }).textContent()).replace('$', ''));
   87 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
   88 |   await page.getByRole('link', { name: 'Add to cart' }).click();
   89 |   await page.getByRole('link', { name: 'Cart', exact: true }).click();
   90 |   const totalPrice = product1Price + product2Price;
   91 |   await expect(page.getByRole('heading', { name: `${totalPrice}` })).toBeVisible();
   92 | });
   93 |
   94 | test('Cross-category product selection and purchase', async ({ page }) => {
   95 |   const orderDetails = JSON.parse(fs.readFileSync('orderDetails.json', 'utf-8'));
   96 |
   97 |   await page.goto('https://www.demoblaze.com/');
   98 |   await page.getByRole('link', { name: 'Phones' }).click();
   99 |   await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  100 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  101 |   await page.getByRole('link', { name: 'Add to cart' }).click();
  102 |   await page.goto('https://www.demoblaze.com/');
  103 |   await page.getByRole('link', { name: 'Laptops' }).click();
  104 |   await page.getByRole('link', { name: 'Sony vaio i5' }).click();
  105 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  106 |   await page.getByRole('link', { name: 'Add to cart' }).click();
  107 |   await page.getByRole('link', { name: 'Monitors' }).click();
  108 |   await page.getByRole('link', { name: 'Apple monitor' }).click();
  109 |   page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  110 |   await page.getByRole('link', { name: 'Add to cart' }).click();
  111 |   await page.getByRole('link', { name: 'Cart', exact: true }).click();
  112 |   await expect(page.getByRole('cell', { name: 'Samsung galaxy s6' })).toBeVisible();
  113 |   await expect(page.getByRole('cell', { name: 'Sony vaio i5' })).toBeVisible();
  114 |   await expect(page.getByRole('cell', { name: 'Apple monitor' })).toBeVisible();
  115 |   await page.getByRole('button', { name: 'Place Order' }).click();
  116 |
  117 |   // Fill order details again
  118 |   await page.getByRole('textbox', { name: 'Name:' }).fill(orderDetails.name);
  119 |   await page.getByRole('textbox', { name: 'Country:' }).fill(orderDetails.country);
  120 |   await page.getByRole('textbox', { name: 'City:' }).fill(orderDetails.city);
  121 |   await page.getByRole('textbox', { name: 'Credit card:' }).fill(orderDetails.creditCard);
  122 |   await page.getByRole('textbox', { name: 'Month:' }).fill(orderDetails.month);
  123 |   await page.getByRole('textbox', { name: 'Year:' }).fill(orderDetails.year);
  124 |   await page.getByRole('button', { name: 'Purchase' }).click();
  125 |   await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
  126 | });
  127 |
```
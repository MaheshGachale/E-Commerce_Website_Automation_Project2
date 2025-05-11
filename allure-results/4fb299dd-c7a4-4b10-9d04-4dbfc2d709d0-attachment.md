# Test info

- Name: Login functionality
- Location: C:\Users\Mahesh Gachale\Desktop\Advanced_Projects\E-Commerce Website Automation\tests\Automation.spec.js:22:5

# Error details

```
Error: Timed out 10000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('link', { name: 'Log out' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 10000ms
  - waiting for getByRole('link', { name: 'Log out' })

    at C:\Users\Mahesh Gachale\Desktop\Advanced_Projects\E-Commerce Website Automation\tests\Automation.spec.js:31:37
```

# Page snapshot

```yaml
- dialog "Log in":
  - document:
    - heading "Log in" [level=5]
    - button "Close"
    - text: "Username:"
    - textbox: user_whkbpyyd
    - text: "Password:"
    - textbox: pass_vlmtzjnl
    - button "Close"
    - button "Log in"
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
  - img "Third slide"
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
   2 | import HomePage from '../pages/HomePage.js';
   3 | import LoginPage from '../pages/LoginPage.js';
   4 | import SignupPage from '../pages/SignupPage.js';
   5 | import ProductPage from '../pages/ProductPage.js';
   6 | import CartPage from '../pages/CartPage.js';
   7 | import fs from 'fs';
   8 |
   9 | test('Signup functionality', async ({ page }) => {
  10 |   const homePage = new HomePage(page);
  11 |   const signupPage = new SignupPage(page);
  12 |
  13 |   const username = `user_${Math.random().toString(36).substring(2, 10)}`;
  14 |   const password = `pass_${Math.random().toString(36).substring(2, 10)}`;
  15 |   fs.writeFileSync('credentials.json', JSON.stringify({ username, password }, null, 2));
  16 |
  17 |   await homePage.navigate();
  18 |   await homePage.clickSignup();
  19 |   await signupPage.signup(username, password);
  20 | });
  21 |
  22 | test('Login functionality', async ({ page }) => {
  23 |   const homePage = new HomePage(page);
  24 |   const loginPage = new LoginPage(page);
  25 |
  26 |   const { username, password } = JSON.parse(fs.readFileSync('credentials.json', 'utf-8'));
  27 |
  28 |   await homePage.navigate();
  29 |   await homePage.clickLogin();
  30 |   await loginPage.login(username, password);
> 31 |   await expect(homePage.logoutLink).toBeVisible({ timeout: 10000 });
     |                                     ^ Error: Timed out 10000ms waiting for expect(locator).toBeVisible()
  32 |   await homePage.clickLogout();
  33 |   await expect(homePage.signupLink).toBeVisible();
  34 | });
  35 |
  36 | test('Add multiple products to cart and place an order', async ({ page }) => {
  37 |   const homePage = new HomePage(page);
  38 |   const productPage = new ProductPage(page);
  39 |   const cartPage = new CartPage(page);
  40 |
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
  51 |   await homePage.navigate();
  52 |   await homePage.selectCategory('phones');
  53 |   await productPage.addToCart();
  54 |   await homePage.selectCategory('laptops');
  55 |   await productPage.addToCart();
  56 |   await homePage.selectCategory('monitors');
  57 |   await productPage.addToCart();
  58 |   await homePage.clickCart();
  59 |   await cartPage.placeOrder(orderDetails);
  60 |   await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
  61 | });
  62 |
  63 | test('Verify product prices', async ({ page }) => {
  64 |   const homePage = new HomePage(page);
  65 |   const productPage = new ProductPage(page);
  66 |
  67 |   await homePage.navigate();
  68 |   await homePage.selectCategory('phones');
  69 |   await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  70 |   const product1Price = parseInt((await page.getByRole('heading', { name: /\$360/ }).textContent()).replace('$', ''));
  71 |   await productPage.addToCart();
  72 |   await homePage.clickCart();
  73 |   const totalPrice = product1Price;
  74 |   const cartTotal = parseInt(await page.locator('#totalp').textContent());
  75 |   expect(cartTotal).toBe(totalPrice);
  76 | });
  77 |
  78 | test('Cross-category product selection and purchase', async ({ page }) => {
  79 |   const homePage = new HomePage(page);
  80 |   const productPage = new ProductPage(page);
  81 |   const cartPage = new CartPage(page);
  82 |
  83 |   const orderDetails = JSON.parse(fs.readFileSync('orderDetails.json', 'utf-8'));
  84 |
  85 |   await homePage.navigate();
  86 |   await homePage.selectCategory('phones');
  87 |   await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  88 |   await productPage.addToCart();
  89 |   await homePage.selectCategory('laptops');
  90 |   await page.getByRole('link', { name: 'Sony vaio i5' }).click();
  91 |   await productPage.addToCart();
  92 |   await homePage.selectCategory('monitors');
  93 |   await page.getByRole('link', { name: 'Apple monitor' }).click();
  94 |   await productPage.addToCart();
  95 |   await homePage.clickCart();
  96 |   await cartPage.placeOrder(orderDetails);
  97 |   await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
  98 | });
  99 |
```
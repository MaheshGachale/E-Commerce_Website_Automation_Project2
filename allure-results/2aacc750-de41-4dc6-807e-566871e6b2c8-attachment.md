# Test info

- Name: Cross-category product selection and purchase
- Location: C:\Users\Mahesh Gachale\Desktop\Advanced_Projects\E-Commerce Website Automation\tests\Automation.spec.js:78:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.demoblaze.com/
Call log:
  - navigating to "https://www.demoblaze.com/", waiting until "load"

    at HomePage.navigate (C:\Users\Mahesh Gachale\Desktop\Advanced_Projects\E-Commerce Website Automation\pages\HomePage.js:16:21)
    at C:\Users\Mahesh Gachale\Desktop\Advanced_Projects\E-Commerce Website Automation\tests\Automation.spec.js:85:18
```

# Page snapshot

```yaml
- heading "No internet" [level=1]
- paragraph: "Try:"
- list:
  - listitem: Checking the network cables, modem, and router
  - listitem: Reconnecting to Wi-Fi
  - listitem:
    - link "Running Windows Network Diagnostics":
      - /url: javascript:diagnoseErrors()
- text: ERR_INTERNET_DISCONNECTED
- application "Dino game, press space to play"
```

# Test source

```ts
   1 | class HomePage {
   2 |   constructor(page) {
   3 |     this.page = page;
   4 |     this.signupLink = page.getByRole('link', { name: 'Sign up' });
   5 |     this.loginLink = page.getByRole('link', { name: 'Log in' });
   6 |     this.logoutLink = page.getByRole('link', { name: 'Log out' });
   7 |     this.cartLink = page.getByRole('link', { name: 'Cart', exact: true });
   8 |     this.categoryLinks = {
   9 |       phones: page.getByRole('link', { name: 'Phones' }),
  10 |       laptops: page.getByRole('link', { name: 'Laptops' }),
  11 |       monitors: page.getByRole('link', { name: 'Monitors' }),
  12 |     };
  13 |   }
  14 |
  15 |   async navigate() {
> 16 |     await this.page.goto('https://www.demoblaze.com/');
     |                     ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.demoblaze.com/
  17 |   }
  18 |
  19 |   async clickSignup() {
  20 |     await this.signupLink.click();
  21 |   }
  22 |
  23 |   async clickLogin() {
  24 |     await this.loginLink.click();
  25 |   }
  26 |
  27 |   async clickLogout() {
  28 |     await this.logoutLink.click();
  29 |   }
  30 |
  31 |   async clickCart() {
  32 |     await this.cartLink.click();
  33 |   }
  34 |
  35 |   async selectCategory(category) {
  36 |     await this.categoryLinks[category].click();
  37 |   }
  38 | }
  39 |
  40 | export default HomePage;
  41 |
```
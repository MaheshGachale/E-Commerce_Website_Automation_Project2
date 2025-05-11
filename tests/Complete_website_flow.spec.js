import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Verify signup functionality
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  // Here fill the username with random string
  await page.getByRole('textbox', { name: 'Username:' }).fill('playwrightasdfghjkl');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  // Here fill the password with random string
  await page.getByRole('textbox', { name: 'Password:' }).fill('12345');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Sign up' }).click();
  // store the login username and password in variable in json format in current directory


// Verify Login functionality
await page.getByRole('link', { name: 'Log in' }).click();
await page.locator('#loginusername').click();
// Here fill the username which we used in signup
await page.locator('#loginusername').fill('playwrightasdfghjkl');
await page.locator('#loginpassword').click();
// Here fill the password which we used in signup
await page.locator('#loginpassword').fill('12345');
await page.getByRole('button', { name: 'Log in' }).click();
// Verify login success with Welcome {username} message
// take the username from the json file and use it here
await expect(page.getByRole('link', { name: 'Welcome playwrightasdfghjkl' })).toBeVisible();



// Verify Logout functionality
await page.getByRole('link', { name: 'Log out' }).click();
await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();



// Verify order is getting placed with multiple products
await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
await page.goto('https://www.demoblaze.com/index.html');

await page.getByRole('link', { name: 'Nokia lumia' }).click();
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
await page.goto('https://www.demoblaze.com/index.html');
await page.getByRole('link', { name: 'Nexus' }).click();
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
await page.getByRole('link', { name: 'Cart', exact: true }).click();

await expect(page.getByRole('cell', { name: 'Nokia lumia' })).toBeVisible();

await expect(page.getByRole('cell', { name: 'Samsung galaxy s6' })).toBeVisible();
await expect(page.getByRole('cell', { name: 'Nexus' })).toBeVisible();
await page.getByRole('button', { name: 'Place Order' }).click();
//  Below is the form to fill the order details
// we need to create the random details for the order, we will use those details in other test cases as well so store it in the json file and access it here
await page.getByRole('textbox', { name: 'Total: 1830 Name:' }).fill('qq');

await page.getByRole('textbox', { name: 'Country:' }).fill('qq');

await page.getByRole('textbox', { name: 'City:' }).fill('qq');

await page.getByRole('textbox', { name: 'Credit card:' }).fill('123');

await page.getByRole('textbox', { name: 'Month:' }).fill('11');
;
await page.getByRole('textbox', { name: 'Year:' }).fill('21');
await page.getByRole('button', { name: 'Purchase' }).click();
await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
await page.getByLabel('Place order').getByText('Close').click();
await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
await page.getByRole('button', { name: 'OK' }).click();



// verify product price as per user selected 
await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
// we need to store this price as product 1 price in variable so that we can use it later for verification
const product1Price = await page.getByRole('heading', { name: '$360 *includes tax' }).textContent();
console.log(product1Price);

page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
await page.goto('https://www.demoblaze.com/index.html');

await page.getByRole('link', { name: 'Nokia lumia' }).click();
// we need to store this price as product 2 price in variable so that we can use it later for verification
await page.getByRole('heading', { name: '$820 *includes tax' }).click();

page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
await page.getByRole('link', { name: 'Cart', exact: true }).click();
// we need to store this price as total price in variable so that we can use it later for verification
await page.getByRole('heading', { name: '1180' }).click();
// now compare the product 1 price and product 2 price with total price
const totalPrice = await page.getByRole('heading', { name: '1180' }).textContent();

// fill the order details using the same details as per json file
await page.getByRole('button', { name: 'Place Order' }).click();
await page.getByRole('textbox', { name: 'Total: 1180 Name:' }).click();
await page.getByRole('textbox', { name: 'Total: 1180 Name:' }).fill('qq');
await page.getByRole('textbox', { name: 'Country:' }).click();
await page.getByRole('textbox', { name: 'Country:' }).fill('qq');
await page.getByRole('textbox', { name: 'City:' }).click();
await page.getByRole('textbox', { name: 'City:' }).fill('qq');
await page.getByRole('textbox', { name: 'Credit card:' }).click();
await page.getByRole('textbox', { name: 'Credit card:' }).fill('qq');
await page.getByRole('textbox', { name: 'Month:' }).click();
await page.getByRole('textbox', { name: 'Month:' }).fill('q');
await page.getByRole('textbox', { name: 'Year:' }).click();
await page.getByRole('textbox', { name: 'Year:' }).fill('qqq');
await page.getByRole('button', { name: 'Purchase' }).click();
// here as well we neeed to compare  amount with the total price
await page.getByText('Id: 8820006Amount: 1180').click();
await page.getByRole('button', { name: 'OK' }).click();



// Verify cross category wise product selection and purchase
await page.getByRole('link', { name: 'Phones' }).click();
await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
await page.goto('https://www.demoblaze.com/index.html#');
await page.getByRole('link', { name: 'Laptops' }).click();
await page.getByRole('link', { name: 'Sony vaio i5' }).click();
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
await page.getByRole('link', { name: 'Monitors' }).click();
await page.getByRole('link', { name: 'Apple monitor' }).click();
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
await page.getByRole('link', { name: 'Cart', exact: true }).click();
await expect(page.getByRole('cell', { name: 'Samsung galaxy s6' })).toBeVisible();
await expect(page.getByRole('cell', { name: 'Sony vaio i5' })).toBeVisible();
await expect(page.getByRole('cell', { name: 'Apple monitor' })).toBeVisible();
await page.getByRole('button', { name: 'Place Order' }).click();

// fill the order details using the same details as per json file
await page.getByRole('textbox', { name: 'Total: 1550 Name:' }).click();
await page.getByRole('textbox', { name: 'Total: 1550 Name:' }).fill('11');
await page.getByRole('textbox', { name: 'Country:' }).click();
await page.getByRole('textbox', { name: 'Country:' }).fill('11');
await page.getByRole('textbox', { name: 'City:' }).click();
await page.getByRole('textbox', { name: 'City:' }).fill('11');
await page.getByRole('textbox', { name: 'Credit card:' }).click();
await page.getByRole('textbox', { name: 'Credit card:' }).fill('11');
await page.getByRole('textbox', { name: 'Month:' }).click();
await page.getByRole('textbox', { name: 'Month:' }).fill('11');
await page.getByRole('textbox', { name: 'Year:' }).click();
await page.getByRole('textbox', { name: 'Year:' }).fill('11');
await page.getByRole('button', { name: 'Purchase' }).click();
await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
await page.getByRole('button', { name: 'OK' }).click();
});
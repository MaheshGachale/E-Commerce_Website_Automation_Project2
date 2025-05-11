import { test } from '@playwright/test';
const XLSX = require('xlsx');

test('Extract IPO data using data-label and save to Excel', async ({ page }) => {
  await page.goto('https://www.investorgain.com/report/live-ipo-gmp/331/', {
    waitUntil: 'networkidle'
  });

  // Scroll to the bottom in case data loads on scroll
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(3000); // wait for lazy-loaded content

  // Wait for rows to appear
  await page.waitForSelector('tbody tr', { timeout: 60000 });

  const data = await page.$$eval('tbody tr', rows => {
    return rows.map(row => {
      const getText = (label: string): string => {
        const cell = Array.from(row.querySelectorAll('td')).find(td => td.getAttribute('data-label') === label);
        return cell ? cell.innerText.trim() : '';
      };

      return {
        CompanyName: getText("IPO"), // Extract company name from IPO column
        Status: getText("Status"), // Extract IPO status
        Price: getText("Price"), // Extract Price
        GMP: getText("GMP"), // Extract GMP
        EstListing: getText("Est Listing"), // Extract Estimated Listing price
        Open: getText("Open"), // Extract Open date
        Close: getText("Close"), // Extract Close date
        Listing: getText("Listing"), // Extract Listing date
        GMPUpdated: getText("GMP Updated") // Extract GMP updated time
      };
    });
  });

  // Clean data by filtering out any rows without a valid Company Name
  const cleanedData = data.filter(row => row.CompanyName && row.CompanyName !== 'IPO');

  // Convert cleaned data to a worksheet
  const worksheet = XLSX.utils.json_to_sheet(cleanedData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'IPO Data');

  // Write data to Excel file
  XLSX.writeFile(workbook, 'ipo_data.xlsx');
});

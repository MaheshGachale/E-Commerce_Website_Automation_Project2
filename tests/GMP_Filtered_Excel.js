const xlsx = require('xlsx');
const fs = require('fs');

// Load the Excel file
const workbook = xlsx.readFile('ipo_data.xlsx');
const sheetName = workbook.SheetNames[0]; // Assuming the data is in the first sheet
const sheet = workbook.Sheets[sheetName];

// Convert the sheet to JSON format
const data = xlsx.utils.sheet_to_json(sheet, { header: 1 }); // Include headers as well

// Extract headers and rows separately
const headers = data[0];  // First row contains headers
const rows = data.slice(1);  // Remaining rows contain the data

// Get today's date in 'DD-MMM' format (e.g., 6-May)
const today = new Date();
const todayFormatted = today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }); // "6-May"

// Function to compare the "Close" column date with today's date
function isFutureDate(closeDate) {
  const [day, month] = closeDate.split('-');
  const formattedDate = `${month} ${day}, ${today.getFullYear()}`;  // Convert to "MMM DD, YYYY" format
  const closeDateObj = new Date(formattedDate);
  return closeDateObj >= today;
}

// Find the index of the "Close" column
const closeColumnIndex = headers.indexOf('Close');
if (closeColumnIndex === -1) {
  console.error('No "Close" column found!');
  process.exit(1);
}

// Filter rows based on the "Close" column date
const filteredRows = rows.filter(row => {
  const closeDate = row[closeColumnIndex]; // Get the "Close" date for the current row
  return isFutureDate(closeDate);
});

// Add the headers back to the filtered rows
const filteredData = [headers, ...filteredRows];

// Convert the filtered data back to a sheet
const filteredSheet = xlsx.utils.aoa_to_sheet(filteredData);

// Create a new workbook and append the filtered data
const filteredWorkbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(filteredWorkbook, filteredSheet, sheetName);

// Write the new Excel file
xlsx.writeFile(filteredWorkbook, 'filtered_output.xlsx');

console.log('Filtered data saved to filtered_output.xlsx');

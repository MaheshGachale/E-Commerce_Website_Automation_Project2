const xlsx = require('xlsx');
const axios = require('axios');
const path = require('path');

// === CONFIGURATION ===
const excelFilePath = path.resolve(__dirname, 'filtered_output.xlsx'); // <-- Replace with your Excel path
const telegramBotToken = '7871096849:AAHT-RcG0do2zJLINshLCTrbGrmgO2hknRo'; // <-- Replace with your bot token
const telegramChatId = '-4744431609'; // <-- Replace with your Telegram chat ID

// === HELPER ===
function extractPercentage(estListingStr) {
    const match = estListingStr.match(/\(([\d.]+)%\)/);
    return match ? parseFloat(match[1]) : 0;
}

async function sendToTelegram(message) {
    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    await axios.post(url, {
        chat_id: telegramChatId,
        text: message,
        parse_mode: 'Markdown'
    });
}

// === MAIN FUNCTION ===
function processExcelAndSendMessages() {
    const workbook = xlsx.readFile(excelFilePath);
    const sheetName = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    data.forEach(async (row) => {
        const percentage = extractPercentage(row.EstListing || '');

        if (percentage >= 30) {
            const message = `*CompanyName:* ${row.CompanyName}
*Status:* ${row.Status}
*GMP:* ${row.GMP}
*EstListing:* ${row.EstListing}
*Close:* ${row.Close}
*Listing:* ${row.Listing}
*GMPUpdated:* ${row.GMPUpdated}`;

            try {
                await sendToTelegram(message);
                console.log('Message sent for:', row.CompanyName);
            } catch (error) {
                console.error('Failed to send message:', error.message);
            }
        }
    });
}

processExcelAndSendMessages();

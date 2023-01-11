const puppeteer = require('puppeteer');
const fs = require('fs');


async function GerarPdf() {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  const html = fs.readFileSync('../html/teste.html', 'utf-8');
  
  console.log(html)

  await page.setContent(html, { waitUntil: 'domcontentloaded' });

  await page.evaluate(() => {


    document.querySelector('input[name="q"]');
  });

  await page.emulateMediaType('screen');

  // Downlaod the PDF
  const pdf = await page.pdf({
    path: 'result.pdf',
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    printBackground: true,
    format: 'A4',
  });  

  // Close the browser instance
  await browser.close();
}

 GerarPdf();
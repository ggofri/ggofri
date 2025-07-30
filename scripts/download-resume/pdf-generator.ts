import puppeteer from 'puppeteer';
import type { PdfOptions } from './types.js';

const PDF_OPTIONS: PdfOptions = {
  format: 'A4',
  printBackground: true,
  margin: {
    top: '1cm',
    right: '1cm',
    bottom: '1cm',
    left: '1cm',
  }
};

export const generatePdf = async (htmlContent: string, outputPath: string): Promise<void> => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    
    await page.pdf({
      path: outputPath,
      ...PDF_OPTIONS
    });
  } finally {
    await browser.close();
  }
};

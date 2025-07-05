const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function generatePDF() {
    try {
        console.log('Launching browser...');
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        console.log('Opening HTML file...');
        const htmlPath = path.join(__dirname, 'ATS_optimized_resume.html');
        const html = fs.readFileSync(htmlPath, 'utf8');
        await page.setContent(html, { waitUntil: 'networkidle0' });
        
        console.log('Generating PDF...');
        await page.pdf({
            path: path.join(__dirname, 'Kunchala_Srinivas_ATS_Resume.pdf'),
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0.5in',
                right: '0.5in',
                bottom: '0.5in',
                left: '0.5in'
            }
        });
        
        console.log('PDF generated successfully!');
        await browser.close();
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
}

generatePDF();

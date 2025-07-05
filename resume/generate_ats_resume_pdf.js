const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function generatePDF() {
    try {
        console.log('Launching browser...');
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        console.log('Opening HTML file...');
        const htmlPath = path.join(__dirname, 'ATS_Optimized_Resume.html');
        const html = fs.readFileSync(htmlPath, 'utf8');
        await page.setContent(html, { waitUntil: 'networkidle0' });
        
        const pdfPath = path.join(__dirname, 'Kunchala_Srinivas_Resume.pdf');
        console.log('Generating PDF...');
        await page.pdf({
            path: pdfPath,
            format: 'Letter',
            printBackground: true,
            margin: {
                top: '0.15in',
                right: '0.2in',
                bottom: '0.15in',
                left: '0.2in'
            }
        });
        
        console.log('PDF generated successfully!');
        
        // Copy the file to the public folder
        const publicPath = path.join(__dirname, '../public/resume.pdf');
        fs.copyFileSync(pdfPath, publicPath);
        console.log('PDF copied to public folder successfully!');
        
        await browser.close();
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
}

generatePDF();

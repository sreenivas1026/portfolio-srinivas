// GitHub Pages Setup Script
// This script prepares the repository for GitHub Pages deployment

console.log('Starting GitHub Pages setup...');

// Create necessary files for GitHub Pages
const fs = require('fs');
const path = require('path');

// Function to ensure a file exists, creating it with content if it doesn't
function ensureFileExists(filePath, content = '') {
    try {
        if (!fs.existsSync(filePath)) {
            // Create directory if it doesn't exist
            const dir = path.dirname(filePath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            
            // Write the file
            fs.writeFileSync(filePath, content);
            console.log(`Created: ${filePath}`);
        } else {
            console.log(`File already exists: ${filePath}`);
        }
    } catch (error) {
        console.error(`Error with file ${filePath}:`, error);
    }
}

// Ensure .nojekyll exists (prevents GitHub from using Jekyll to process the site)
ensureFileExists('.nojekyll');

// Ensure CNAME file exists if you're using a custom domain
// Uncomment and modify if you have a custom domain
// ensureFileExists('CNAME', 'yourdomain.com');

// Create or update 404.html
const notFoundPage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background: #f5f5f5;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #e74c3c;
        }
        a {
            color: #3498db;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <p><a href="/">Go to Homepage</a></p>
    </div>
</body>
</html>`;
ensureFileExists('404.html', notFoundPage);

// Create robots.txt
const robotsTxt = `User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml`;
ensureFileExists('robots.txt', robotsTxt);

// Create a basic sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/resume.html</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>0.80</priority>
  </url>
</urlset>`;
ensureFileExists('sitemap.xml', sitemapXml);

// Create a GitHub Pages verification file
const verificationHtml = `<!DOCTYPE html>
<html>
<head>
  <title>GitHub Pages Deployment Verification</title>
  <meta name="description" content="This file verifies GitHub Pages is working correctly">
</head>
<body>
  <h1>GitHub Pages Deployment Verification</h1>
  <p>If you can see this page, GitHub Pages is working correctly.</p>
  <p>Timestamp: ${new Date().toISOString()}</p>
</body>
</html>`;
ensureFileExists('github-pages-check.html', verificationHtml);

console.log('GitHub Pages setup complete!');

# Vercel Deployment Guide

This guide will help you deploy your portfolio on Vercel and set up a custom domain.

## Deploying to Vercel

1. **Create a Vercel Account:**
   - Go to [Vercel](https://vercel.com/)
   - Sign up or log in (you can use your GitHub account)

2. **Import Your GitHub Repository:**
   - Click "Add New" > "Project"
   - Select "Import Git Repository"
   - Find and select your portfolio repository
   - If you don't see your repository, click "Add GitHub Account" and provide access

3. **Configure Project Settings:**
   - Framework Preset: Select "Other" (since this is a static website)
   - Root Directory: Leave empty (all files are in the root directory)
   - Build Command: Leave empty (no build process needed)
   - Output Directory: Leave empty (files are served from root)
   - Environment Variables: None required for basic deployment
   - Click "Deploy"

4. **Verify Deployment:**
   - Vercel will build and deploy your site (this should take less than a minute)
   - Once complete, you'll receive a unique URL to preview your site
   - Click the URL to verify everything works correctly

## Setting Up a Custom Domain

1. **Add Your Domain:**
   - From your Vercel project dashboard, click on "Settings"
   - Select "Domains" from the left sidebar
   - Enter your domain name (e.g., "srinivaskunchala.me") and click "Add"

2. **Verify Domain Ownership:**
   - Vercel will provide DNS configuration instructions
   - You'll need to add DNS records at your domain registrar
   - Choose one of the verification methods:
     - Add an A record pointing to Vercel's IP
     - Add a CNAME record pointing to your Vercel deployment URL
     - Add TXT records for verification

3. **Wait for DNS Propagation:**
   - DNS changes can take up to 48 hours to propagate globally
   - Vercel will show verification status in real-time
   - Once verified, your site will be accessible via your custom domain

4. **SSL Certificate:**
   - Vercel automatically issues and renews SSL certificates
   - Your site will be accessible via HTTPS with no additional configuration

## Troubleshooting

If your site shows a 404 error after deployment:

1. **Verify File Structure:**
   - Ensure index.html is in the root directory
   - Check that all file paths in your HTML files are correct
   - The simplified folder structure should prevent path issues

2. **Check Vercel Logs:**
   - In your Vercel dashboard, go to "Deployments"
   - Select the latest deployment
   - Click "View Logs" to see deployment details and errors

3. **Force HTTPS:**
   - In your Vercel project settings, ensure "Force HTTPS" is enabled
   - This prevents mixed content issues

4. **Clear Cache:**
   - Sometimes browsers cache old versions of your site
   - Try opening your site in an incognito/private window
   - Or clear your browser cache manually

## Additional Tips

- **Preview Deployments:** Vercel creates preview deployments for each GitHub pull request
- **Environment Variables:** For advanced features, add environment variables in the Vercel project settings
- **Custom 404 Page:** Your 404.html file will automatically be used for any missing pages

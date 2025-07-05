# GitHub Pages Setup Instructions

To enable GitHub Pages for your portfolio, follow these steps:

1. Go to your GitHub repository at `https://github.com/sreenivas1026/portfolio-srinivas`

2. Click on "Settings" (tab near the top right)

3. In the left sidebar, click on "Pages"

4. Under "Build and deployment":
   - For Source, select "GitHub Actions"
   - This will use the workflow file we created in `.github/workflows/deploy.yml`

5. Under "Custom domain":
   - Enter your domain: `srinivaskunchala.me`
   - Check "Enforce HTTPS" if available

6. Click "Save"

7. Wait for the GitHub Pages build to complete (can take a few minutes)

Your site will be available at your custom domain once DNS propagation is complete (can take up to 48 hours, but often much faster).

## DNS Configuration

To point your domain to GitHub Pages:

1. Log in to your domain registrar
2. Add these DNS records:
   - Type: A Record, Name: @, Value: 185.199.108.153
   - Type: A Record, Name: @, Value: 185.199.109.153
   - Type: A Record, Name: @, Value: 185.199.110.153
   - Type: A Record, Name: @, Value: 185.199.111.153
   - Type: CNAME, Name: www, Value: sreenivas1026.github.io

These are the standard GitHub Pages IP addresses that your domain should point to.

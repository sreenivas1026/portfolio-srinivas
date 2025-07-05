# Netlify Deployment Instructions

Netlify is one of the easiest platforms to deploy static sites with custom domains. Follow these steps for a successful deployment:

## Quick Deploy

1. Go to [Netlify](https://app.netlify.com/) and sign up/log in (you can use your GitHub account)

2. Click on "Add new site" > "Import an existing project"

3. Choose "Deploy with GitHub" and select your `portfolio-srinivas` repository

4. Configure the deployment settings:
   - Owner: (Your Netlify team)
   - Branch to deploy: `master` (or your main branch)
   - Base directory: (leave empty)
   - Build command: (leave empty)
   - Publish directory: (leave empty)

5. Click "Deploy site"

## Custom Domain Setup

1. After your site is deployed, go to "Site settings" > "Domain management"

2. Click on "Add custom domain"

3. Enter your domain: `srinivaskunchala.me`

4. Follow the instructions to verify domain ownership:
   - Option 1: Update your DNS records with your domain registrar
   - Option 2: Transfer your domain to Netlify DNS (easier for ongoing management)

5. For external DNS (if not transferring to Netlify):
   - Add a CNAME record pointing your domain to your Netlify site URL
   - Example: CNAME `srinivaskunchala.me` → `your-site-name.netlify.app`

6. Enable HTTPS by clicking the "Verify DNS configuration" button and then enabling HTTPS

## Troubleshooting Common Issues

1. **404 Errors**: The `netlify.toml` file we've added includes redirect rules to prevent 404s for single-page applications.

2. **Domain Configuration**: Netlify provides detailed DNS instructions specific to your site - follow those exactly.

3. **DNS Propagation**: Allow up to 48 hours for DNS changes to fully propagate worldwide.

4. **HTTPS Issues**: Netlify automatically provisions SSL certificates through Let's Encrypt. If you have issues, ensure your DNS is correctly configured.

## Advantages of Netlify

- Free plan is generous for personal sites
- Automated deploys from GitHub
- Easy custom domain and HTTPS setup
- Built-in redirect and header management
- Better handling of single-page applications
- Excellent documentation and support

Your site should be live within minutes after deployment!

## Vercel Deployment Instructions

### Automatic Deployment

1. Connect this repository to Vercel:
   - Go to [Vercel](https://vercel.com)
   - Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository (portfolio-srinivas)
   - Configure project settings:
     - Framework preset: Other (Static Site)
     - Root directory: ./
     - Build command: (leave empty)
     - Output directory: ./
   - Click "Deploy"

2. Custom Domain Setup:
   - After deployment, go to the "Domains" section in your Vercel project
   - Add your custom domain: "srinivaskunchala.me"
   - Follow Vercel's instructions to verify and configure your domain DNS settings

### Troubleshooting Deployment Issues

If you encounter deployment errors:

1. **Static Site Configuration**:
   - Ensure you've selected "Static Site" or "Other" as your framework preset
   - Set the correct root and output directories (both should be "./")
   - No build command is needed for this simple static site

2. **Common Error Codes**:
   - **DEPLOYMENT_NOT_FOUND (404)**: The deployment URL is incorrect or has been deleted
   - **DEPLOYMENT_BLOCKED (403)**: Deployment is blocked due to account restrictions
   - **DEPLOYMENT_NOT_READY_REDIRECTING (303)**: Deployment is still being processed
   - **FUNCTION_INVOCATION_FAILED (500)**: Server-side function error (N/A for static sites)

### Alternative Manual Deployment

If you prefer to deploy through the Vercel CLI:

1. Install Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Login to Vercel:
   ```
   vercel login
   ```

3. Deploy the project:
   ```
   vercel
   ```

4. For production deployment:
   ```
   vercel --prod
   ```

### Advantages of Vercel Deployment

- Fast global CDN
- Automatic HTTPS
- Custom domains with one-click SSL
- Preview deployments for all pull requests
- Optimized asset serving
- Seamless GitHub integration

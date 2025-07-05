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

1. **Simplest Approach**:
   - Vercel can automatically detect and deploy static sites without configuration
   - Make sure your index.html is in the root directory
   - Choose "Static Site" or "Other" as your framework preset
   - Set the correct root and output directories (both should be "./")
   
2. **404 Errors After Deployment**:
   - If you encounter 404 errors after deployment, try visiting the root URL directly
   - Make sure your links are relative within the site
   - Vercel automatically handles basic static site routing

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

# Kunchala Srinivas Portfolio Website

A modern, professional tech-oriented portfolio website for Kunchala Srinivas showcasing skills, projects, and experience in cybersecurity and full-stack development.

## 🚀 Features

- **Modern Techie Design**: Built with HTML, Tailwind CSS (via CDN), and Bootstrap (via CDN)
- **Fully Responsive**: Works on all devices and screen sizes
- **No Build Process Required**: Just open the HTML file in a browser
- **Fast Loading**: Optimized for performance
- **SEO Ready**: Includes meta tags and structured data
- **Visitor Notifications**: Receives email notifications when visitors access the site
- **Contact Form**: Professional contact form with Formspree integration
- **Tabular Data Format**: All form submissions are presented in a clean, tabular format
- **One-Page Resume**: Downloadable resume optimized to fit on a single page

## 📋 Repository Structure

This is a static portfolio website with no server-side dependencies. It's organized into the following directories:

- `/` - Main portfolio website files (index.html)
- `/assets` - Website assets (images, CSS, JS)
- `/public` - Public downloadable files including the resume PDF
- `/resume` - Source files for the one-page resume with PDF generation script

```
/
├── assets/
│   └── img/           # Images and icons
├── public/
│   └── resume.pdf     # Your resume (replace with your actual resume)
├── index.html         # Main HTML file with all content, styles and scripts
├── visitor-notification-setup.md # Instructions for the visitor notification system
└── README.md          # This file
```

## 🛠️ How to Use

1. Simply open `index.html` in your web browser to view the portfolio
2. Edit the HTML file directly to update content
3. Replace the placeholder resume in `public/resume.pdf` with your actual resume
4. Follow the instructions in `visitor-notification-setup.md` to set up the visitor notification system

## 🔍 Customization

1. **Content**: Edit the HTML to change any content
2. **Styling**: Modify the styles in the `<style>` section of the HTML
3. **Resume**: Replace the placeholder resume with your actual PDF
4. **Photos**: Replace placeholder images in assets/img folder

## 📤 Deployment

To deploy this website:

1. Upload all files to any web hosting service
2. No server-side processing is required
3. Make sure to replace the placeholder resume with your actual resume
4. Set up the visitor notification system by following the instructions in `visitor-notification-setup.md`

## 📤 Deployment with GitHub Pages

To deploy this website using GitHub Pages:

1. Push your code to GitHub (already done)
2. GitHub Actions will automatically deploy your site when you push to the master branch
3. Go to your repository settings on GitHub
4. Navigate to "Pages" in the sidebar
5. Under "Build and deployment" section, ensure:
   - Source is set to "GitHub Actions"
6. Your site will be available at `https://[your-username].github.io/portfolio-srinivas/`

For a custom domain:
1. In your GitHub repository settings, go to "Pages"
2. Under "Custom domain", enter your domain "srinivaskunchala.me"
3. Add a CNAME record in your DNS settings pointing to your GitHub Pages URL
4. GitHub will automatically handle SSL certificates

If you encounter any deployment issues:
1. Check the GitHub Actions tab for build logs and error messages
2. Ensure your repository has proper permissions for GitHub Actions
3. Verify that the branch name in the workflow file matches your default branch

## � Security Notes

- The visitor notification system uses Formspree, which is secure and free for small-scale usage
- Rate limiting is implemented to prevent abuse of the notification system (one notification per visitor per 24 hours)
- No user data is stored or collected beyond what's needed for the visitor notification

## �📝 Notes

- All styling is included directly in the HTML file using Tailwind CSS and Bootstrap via CDN
- JavaScript functionality is minimal and included directly in the HTML
- No build steps, compilation, or Node.js dependencies required

## � License

This project is licensed under the MIT License.

## 🔔 Notification Features

- **Visitor Tracking**: Automatically sends an email notification when someone visits your portfolio
- **Contact Form**: Professional-looking form that emails submissions directly to you
- **Tabular Format**: All form submissions and visitor notifications are sent in a clean, tabular format
- **Rate Limiting**: Prevents excessive notifications (one per visitor per 24 hours)
- **Enhanced Details**: Collects helpful but non-invasive visitor information (location, browser, etc.)

## 🔒 Updated Security Notes

- The visitor notification system uses Formspree, which is secure and free for small-scale usage
- Rate limiting is implemented to prevent abuse of the notification system
- No user data is stored or collected beyond what's needed for the visitor notification
- All emails are sent directly to your Gmail address (srinivas0k7@gmail.com)
```

## 🔒 Security Notes

- The Gmail App Password is stored as an environment variable in Vercel and is not exposed to users
- Rate limiting is implemented to prevent abuse of the notification system
- No user data is stored or collected

## 🔍 Customization



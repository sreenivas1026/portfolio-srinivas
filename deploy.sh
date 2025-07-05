#!/bin/bash

# This script helps with GitHub Pages deployment

echo "Preparing for deployment..."
echo "Current directory: $(pwd)"
ls -la

# Ensure critical files exist
touch .nojekyll
echo "srinivaskunchala.me" > CNAME

# Create a simple sitemap
echo '<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://srinivaskunchala.me/</loc>
    <lastmod>'$(date +%Y-%m-%d)'</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>' > sitemap.xml

echo "Deployment preparation complete!"

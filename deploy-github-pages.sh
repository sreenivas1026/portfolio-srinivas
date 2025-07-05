#!/bin/bash
# GitHub Pages Deployment Script

echo "Starting GitHub Pages deployment process..."

# Update timestamp in trigger file
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
sed -i "s/Deployment triggered at: .*/Deployment triggered at: $TIMESTAMP/" github-pages-trigger.md

# Add all files
git add .

# Commit with timestamp
git commit -m "Deploy to GitHub Pages - $TIMESTAMP"

# Push to master branch
git push origin master

echo "Deployment triggered successfully!"
echo "Check GitHub Actions for deployment status: https://github.com/sreenivas1026/portfolio-srinivas/actions"

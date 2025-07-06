#!/bin/bash

# Deployment script for Vercel static build
echo "Starting deployment process..."

# Create timestamp for cache busting
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
echo "Last build: $TIMESTAMP - Vercel deployment" > deployment-timestamp.txt

# Create an empty .nojekyll file to prevent GitHub Pages from using Jekyll
touch .nojekyll

# Update HTML cache buster
if [ -f "index.html" ]; then
  echo "Updating cache busting timestamp in index.html..."
  # Use sed to update the cache busting meta tag
  sed -i.bak "s/<!-- Force cache refresh - updated.*-->/<!-- Force cache refresh - updated $TIMESTAMP -->/g" index.html
  rm -f index.html.bak
fi

# Create a .vercel-rebuild file with current timestamp to ensure Vercel picks up changes
echo "Deployment build triggered at $TIMESTAMP" > .vercel-rebuild

# Update any build-time variables if needed
echo "Build completed at $TIMESTAMP" >> deployment-timestamp.txt

echo "Deployment preparation complete!"

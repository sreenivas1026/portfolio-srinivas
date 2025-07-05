# Manual GitHub Pages Deployment Script

Write-Host "Starting direct manual GitHub Pages deployment..." -ForegroundColor Green

# Configure Git
git config --global user.name "Manual Deployment"
git config --global user.email "manual@example.com"

# Create a new orphan branch (no history)
Write-Host "Creating new orphan gh-pages branch..." -ForegroundColor Yellow
git checkout --orphan gh-pages-temp

# Add all files
Write-Host "Adding all files to the branch..." -ForegroundColor Yellow
git add .

# Create necessary GitHub Pages files
Write-Host "Creating GitHub Pages specific files..." -ForegroundColor Yellow
New-Item -ItemType File -Path .nojekyll -Force | Out-Null
"sreenivas1026.github.io" | Out-File -FilePath CNAME -Encoding utf8 -Force
git add .nojekyll CNAME

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Manual deployment to GitHub Pages $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# Force push to gh-pages branch
Write-Host "Force pushing to gh-pages branch..." -ForegroundColor Yellow
git push -f origin gh-pages-temp:gh-pages

# Switch back to master branch
Write-Host "Switching back to master branch..." -ForegroundColor Yellow
git checkout -f master

Write-Host "Deployment completed successfully!" -ForegroundColor Green
Write-Host "It may take a few minutes for the changes to be visible on GitHub Pages." -ForegroundColor Cyan

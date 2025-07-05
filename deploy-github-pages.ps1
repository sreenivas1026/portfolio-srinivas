# GitHub Pages Deployment PowerShell Script

Write-Host "Starting GitHub Pages deployment process..." -ForegroundColor Green

# Update timestamp in trigger file
$timestamp = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ")
$triggerContent = Get-Content -Path "github-pages-trigger.md"
$updatedContent = $triggerContent -replace "Deployment triggered at: .*", "Deployment triggered at: $timestamp"
$updatedContent | Set-Content -Path "github-pages-trigger.md"

# Add all files
git add .

# Commit with timestamp
git commit -m "Deploy to GitHub Pages - $timestamp"

# Push to master branch
git push origin master

Write-Host "Deployment triggered successfully!" -ForegroundColor Green
Write-Host "Check GitHub Actions for deployment status: https://github.com/sreenivas1026/portfolio-srinivas/actions" -ForegroundColor Cyan

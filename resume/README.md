# One-Page Resume for Kunchala Srinivas

This folder contains the one-page resume HTML and PDF files for Kunchala Srinivas.

## Files Included

- `Resume.html` - HTML version of the concise one-page resume
- `Kunchala_Srinivas_Resume.pdf` - PDF version of the resume (generated from HTML)
- `generate_resume_pdf.js` - Script to generate PDF from the HTML resume

The resume is carefully formatted to fit on a single page while highlighting key skills, experiences, and projects in cybersecurity, Python development, and machine learning.

## How to Update the Resume

1. Edit the `Resume.html` file using any HTML editor
2. Generate an updated PDF by running:
   ```
   node generate_resume_pdf.js
   ```
3. Copy the updated PDF to the website's public folder:
   ```
   Copy-Item -Path "Kunchala_Srinivas_Resume.pdf" -Destination "../public/resume.pdf" -Force
   ```

## Design Features

- Compact layout optimized for one-page printing
- Responsive design that adapts to different paper sizes
- Print-specific CSS to ensure proper formatting when printed

## How to Generate the PDF

If you need to regenerate the PDF from the HTML file:

1. Make sure you have Node.js installed
2. Install puppeteer: `npm install puppeteer`
3. Run the script: `node generate_resume_pdf.js`

## ATS Optimization Features

This resume was created with the following ATS optimization techniques:

1. **Clean, Simple Layout**: Standard sections with clear headings
2. **Keyword Optimization**: Industry-specific terms for cybersecurity roles
3. **Quantified Achievements**: Numbers and percentages throughout
4. **Skills Tagging**: Technical skills are categorized for easy scanning
5. **Consistent Formatting**: Professional fonts and consistent spacing
6. **Standard Section Headings**: Using conventional section names that ATS systems recognize
7. **Relevant Technical Terms**: Includes tools, languages, and methodologies that match job descriptions

## Resume Features

This resume includes:

- Clear career objective highlighting cybersecurity and development skills
- Comprehensive skills section organized by technical domains
- Quantified achievements in internships and projects
- Education details with percentages
- Key projects with technical implementations
- Personal strengths and language proficiencies

## Tips for Using This Resume

- When applying, match keywords in the resume to each specific job description
- Save the PDF with a professional filename (e.g., "Kunchala_Srinivas_Cybersecurity_Resume.pdf")
- Use for both online applications and direct submissions to hiring managers
- Update quantifiable achievements regularly
- When possible, submit both PDF and Word/plaintext versions

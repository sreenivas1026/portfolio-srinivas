const fs = require('fs');
const path = require('path');

// Create a placeholder PDF file with text content
const resumeContent = `
KUNCHALA SRINIVAS
Phone: +91-9110348230 | Email: srinivas0k7@gmail.com
LinkedIn: linkedin.com/in/kunchalasrinivas
Location: Hyderabad, India

CAREER OBJECTIVE
Aspiring cybersecurity specialist with hands-on experience in penetration testing, vulnerability scanning, and full-stack Python development.

EDUCATION
Bachelor of Technology – Information Technology
Malla Reddy Institute of Engineering and Technology, Hyderabad
2021 – 2025

TECHNICAL SKILLS
• Languages: Python, JavaScript, Bash
• Web Development: HTML, CSS, Django, Flask, Streamlit
• Machine Learning: scikit-learn, TensorFlow, OpenCV, Pandas, NumPy
• Blockchain: Smart Contracts, Ethereum, IPFS, Web3.py
• Cybersecurity Tools: Nmap, SQLMap, Wireshark, Bettercap
• Cloud & Tools: Azure, Docker, Git

For a complete resume, please visit my portfolio website.
`;

// Create simple PDF file (just a text file with PDF extension)
fs.writeFileSync(
  path.join(__dirname, 'public', 'resume.pdf'),
  resumeContent
);

console.log('Resume PDF created successfully!');

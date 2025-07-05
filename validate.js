try {
  const fs = require('fs');
  const json = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  console.log('JSON is valid');
  console.log(JSON.stringify(json, null, 2));
} catch(e) {
  console.log('Invalid JSON:', e.message);
}

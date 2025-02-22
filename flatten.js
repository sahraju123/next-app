const fs = require('fs');
const filePath = './secret.json'; // Replace with your file path

const json = fs.readFileSync(filePath, 'utf-8');
const singleLine = JSON.stringify(JSON.parse(json));
console.log(singleLine);
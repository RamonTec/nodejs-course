
// here we are calling the native module of file system
const file = require('fs');

const data = file.readFileSync('example.txt', 'utf8');
console.log(`File content:`, data);
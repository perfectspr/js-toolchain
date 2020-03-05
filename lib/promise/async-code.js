const fs = require('fs');

let file = fs.readFile('./lib/promise/async-code.js', () => { });
console.log(file);
const util = require('util');
const fs = require('fs');

let readFile = util.promisify(fs.readFile);

readFile('./lib/promise/promise.js', 'UTF-8')
.then(console.log)
.catch(console.error);

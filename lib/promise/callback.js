const fs = require('fs');

fs.readFile('./lib/promise/callback.js', 'UTF-8', (err, data)=>{
    if (err) {console.error(err); return;}
    console.log(data);
});
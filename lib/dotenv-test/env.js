'use strict';
require('dotenv').config();

console.log(process.env.NODE_ENV);
console.log(process.env.WEEK_DYAS, typeof process.env.WEEK_DYAS);
console.log( parseInt(process.env.WEEK_DYAS) || 0);
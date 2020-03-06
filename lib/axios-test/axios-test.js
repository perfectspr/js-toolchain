'use strict';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const axios = require('axios');

const API_ENDPOINT = 'http://test_api.com';
console.log(process.env.no_proxy);

axios.get(API_ENDPOINT).then(res=>console.log(res.data));
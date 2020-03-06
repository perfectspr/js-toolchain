'use strict';

const express = require('express');
const app = express();

//middleware
app.use((req, res, next)=>{
    console.log('middleware');
    //res.send('error');
    next();
});
app.use((err, req, res, next)=>{
    res.send(err.message);
});

const router = express.Router();
router.get('/health', (req, res, next)=>{
    console.log('router middleware');
    next();
})
router.get('/health/:id', (req, res)=>{
    console.log('router..')
    //throw new Error('error happened.');
    res.send('hello')
})
app.use(router);

app.listen(3000, ()=>{console.log('started..')});
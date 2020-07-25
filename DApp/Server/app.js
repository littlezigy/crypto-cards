const express  = require('express');
const app  = require('express')();
const path = require('path');

const router = require('./config/routes');

let pathy = path.join(__dirname, '../Client/assets');

console.log('APTHY', pathy);

app.use(router);
app.use('/', express.static(pathy));


module.exports = { app };

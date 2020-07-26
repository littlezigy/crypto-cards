const express  = require('express');
const app  = require('express')();
const path = require('path');

const router = require('./config/routes');

// let pathy = path.join(__dirname, '../Client/assets');
let css = path.join(__dirname, '../Client/css');
let img = path.join(__dirname, '../Client/img');
let js = path.join(__dirname, '../Client/js');

// console.log('APTHY', pathy);

app.use(router);
// app.use('/', express.static(pathy));
app.use('/css', express.static(css));
app.use('/js', express.static(js));
app.use('/img', express.static(img));


module.exports = { app };

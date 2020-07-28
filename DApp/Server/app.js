const express  = require('express');
const app  = require('express')();
const path = require('path');

const router = require('./config/routes');

let css = path.join(__dirname, '../Client/css');
let img = path.join(__dirname, '../Client/img');
let js = path.join(__dirname, '../Client/js');
let abis = path.join(__dirname, '../Client/js/abis');

app.use(router);

app.use('/js/abis', express.static(abis));
app.use('/js', express.static(js));
app.use('/css', express.static(css));
app.use('/img', express.static(img));


module.exports = { app };

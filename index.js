const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res) {

});

app.listen('8080');

console.log('Hello');

exports = module.exports = app;
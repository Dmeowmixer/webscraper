const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res) {
// URL TO SCRAPE
  url = 'http://www.imdb.com/title/tt1229340/';
  request(url, function(err,res, html){
    console.log('hello2');
    if(!err){
      const $ = cheerio.load(html);
      var title,release,rating;
      var json = {title: "", release: "", rating: ""}
      $('.header').filter(function(){
        var data = $(this);
        title = data.children().first().text();
        json.title = title;
        json.release = release;
      })

      $('.star-box-giga-star').filter(function(){
        var data = $(this);
        rating = data.text();
        json.rating = rating;
      })
    }
    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
      console.log('File written');
    })
    res.send('Check console');
  })
});

app.listen('8080');

exports = module.exports = app;
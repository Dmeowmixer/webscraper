const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
  .then(function(html){
    console.log(html);
  })
  .catch(function(err){
    console.log(err);
  })
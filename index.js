/*
How to setup

1. run npm init in new folder
2. install cheerio, request

npm install cheerio --save
npm install request --save
to run:
node index.js
*/
const cheerio = require('cheerio');
const request = require('request');
const https = require('https');
const fs = require('fs');

function download(filename,url){
    const file = fs.createWriteStream(filename); //to write img in file 
    if(url.startsWith('https')){
        const request = https.get(url, function(response) {
        response.pipe(file);
        });
    }
    else{
        const http=require('http');
        const request = http.get(url, function(response) {
        response.pipe(file);
        });
    }
    
}

request({
    method: 'GET',
    url: 'https://www.webscraper.io/test-sites/e-commerce/allinone'
}, (err, res, body) => {

    if (err) return console.error(err);

    let $ = cheerio.load(body);

    let bigheading = $('ul.nav.navbar-nav.navbar-right li'); 
    //url of img
    let link =$('div.thumbnail img');
    let imgUrl='https://www.webscraper.io'+link.attr('src');
    download('abc.png',imgUrl);
    // download('scenery2.jpg','https://i.ytimg.com/vi/2sZ7ea-vfoI/hqdefault.jpg');
    // download('scenery3.jpg','http://i.ytimg.com/vi/2sZ7ea-vfoI/hqdefault.jpg');

});

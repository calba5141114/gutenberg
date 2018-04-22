var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var port = 8080;

var url = "http://localhost:3000"

request(url, function(err, resp, body){
    var $ = cheerio.load(body);
    var testName = $('.test');
    var testNameText = testName.text();
    
    console.log(testNameText);


})

app.listen(port);
console.log("server running on " + port);
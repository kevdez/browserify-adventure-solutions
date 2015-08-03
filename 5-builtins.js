// INPUT: http://substack.next/filez/dogez/img.cgi?file=../hi/doge.gif
// OUTPUT: http://substack.net/filez/hi/doge.gif


var url = require('url');
var querystring = require('querystring');

var webAddress = prompt();

var urlObject = url.parse(webAddress);
var query = urlObject.query;

var parsedQuery = querystring.parse(query);
console.log(url.resolve(webAddress, parsedQuery.file));

var ndjson = require('./ndjson.js');

var stringToArray = prompt();
var arrayToString = prompt();

console.log(ndjson.parse(stringToArray));
console.log(ndjson.stringify(arrayToString));

'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var Adjective = require('./lib/adjective.js');
var Verb = require('.lib/verb.js');
var Noun = require('.lib/noun.js');
var getRandomWord = require('./lib/getRandomWord.js');
var postRandomWord = require('./lib/postRandomWord.js')
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/app/'));

// make an adjective constructor function
// we moved this to the adjective.js file
/* var Adjective = function() {
  this.hungry = true;
  this.sleazy = true;
  this.bombastic = true;
  this.devious = true;
  this.polite = true;
} */
// make an instance of that adjective object

var adjective = new Adjective();

/* added to the noun.js file
var Verb = function() {
  this.running = true;
  this.falling = true;
  this.chasing = true;
  this.licking = true;
  this.starving = true;
}
*/

var verb = new Verb();

/*  Added to the noun.js file
var Noun = function() {
  this.walrus = true;
  this.walnut = true;
  this.sushi = true;
  this.cypress = true;
  this.explosion = true;
}
*/

var noun = new Noun();

// make that word retrieval function
// moved to getRandomWord.js
/*function getRandomWord(object) {
  // get all of those properties into an array
  var propArray = Object.keys(object);
  // pick a random word from the array
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  // return that word in an object
  return {word: randomProp};
} */

/* added to own tab
function postRandomWord(word, wordObject) {
  // check if the word is on the object
  if (!wordObject.hasOwnProperty(word)) {
  // if it's NOT on the object, add it and send a message that we added it
    wordObject[word] = true;
    return {message: 'Thanks! Your word, ' + word + ', has been added.'};
  }
  // if it IS on the object, send a polite message saying we have it
  return {message: 'Thanks! We already have ' + word + ' in our list.'};
}
*/

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.post('/adjective', function(req, res) {
  console.log(req.body);
  res.json(postRandomWord(req.body.word, adjective));
})

app.post('/verb', function(req, res) {
  console.log(req.body);
  res.json(postRandomWord(req.body.word, verb));
})

app.post('/noun', function(req, res) {
  console.log(req.body);
  res.json(postRandomWord(req.body.word, noun));
})

app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.listen(port, function() {
  console.log('server started on port ' + port);
});

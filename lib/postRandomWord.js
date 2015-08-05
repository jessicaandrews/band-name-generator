'use strict';

module.exports = function(word, wordObject) {
  // check if the word is on the object
  if (!wordObject.hasOwnProperty(word)) {

    // if it's NOT on the object, add it and send a message that we added it
    wordObject[word] = true;
    return {message: 'Thanks! Your word, ' + word + ', has been added.'};
  }

  // if it IS on the object, send a message saying we have it
  return {message: 'Thanks! We already have ' + word + ' in our list.'};
};

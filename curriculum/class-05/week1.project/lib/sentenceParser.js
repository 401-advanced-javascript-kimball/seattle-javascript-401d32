'use strict';

const fs = require('fs');

/**
 * Module: Sentence Parser
 */

class SentenceParser {
  constructor(sentence) {
    this.words = sentence.split(' ');
  }

  write() {
    fs.writeFile('data/sentence.txt', Buffer.from(this.words.join(' ')), (err) => {
      if (err) throw err;
      console.log('File saved');
    });
  }

  replace(find, replace) {
    return new Promise((resolve, reject) => {
      let wordIndex = this.words.indexOf(find);
      if (wordIndex) {
        this.words[wordIndex] = replace;
        resolve(this.words.join(' '))
      } else {
        reject('word not found');
      };
    });
  }
}

module.exports = SentenceParser;
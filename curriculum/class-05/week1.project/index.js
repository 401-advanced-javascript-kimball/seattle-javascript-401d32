'use strict';

const SentenceParser = require('./lib/sentenceParser');

const sentence = new SentenceParser(process.argv[2]);
sentence.replace('a', 'the')
  .then(() => sentence.write())
  .catch(console.error);

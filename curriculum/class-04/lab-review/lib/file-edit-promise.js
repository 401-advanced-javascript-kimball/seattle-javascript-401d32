'use strict';

const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

/**
 * Wraps fs.readFile as a promise, processes the file as a JSON string, resolving with a JS object or null
 * Rejects with error on all fs errors as well as a malformed JSON string in the file itself
 * @param file - Full filesystem path to the file to read
 * @returns {Promise<T>}
 */
exports.read = (file) => readFile(file)
  .then(buffer => {
    return JSON.parse(buffer.toString());
  })
  .catch(e => {
    throw e;
  });

/**
 * Wraps fs.writeFile as a promise, processing the "text" as JSON when it presents as an object.
 * @param file - Filesystem Path to the file to write
 * @param text - Can be straight text or an Object
 */
exports.write = (file, text) => {
  let textString = JSON.stringify(text) || text;
  let contents = Buffer.from(textString);
  return writeFile(file, contents)
    .then(results => results)
    .catch(err => {
      throw err;
    });
};

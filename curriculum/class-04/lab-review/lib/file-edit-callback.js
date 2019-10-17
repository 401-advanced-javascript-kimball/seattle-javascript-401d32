'use strict';

const fs = require('fs');

//  Creating two file system methods: read / write
/**
 * @param {String} filePath - the relative path to the file we want to read.
 * @param {function} cb - error first callback function to handle fs values.
 */
exports.read = (filePath, cb) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      cb(err);
    } else {
      try {
        cb(null, JSON.parse(data.toString()));
      } catch (e) {
        cb(e);
      }
    }
  });
}

/**
 * @params {String} file - the location to write to.
 * @params {Object} changes - a text info to write at the provided file path.
 * @params {Function} cb - our callback function
 */

exports.write = (file, changes, cb) => {
  try {
    let bufferText = JSON.stringify(changes);
    const buffer = Buffer.from(bufferText);
    fs.writeFile(file, buffer, cb);
  } catch(e) {
    cb(e);
  }
}


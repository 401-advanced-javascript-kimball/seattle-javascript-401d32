'use strict';

let fileContents = 'Test string';

// module.exports = exports = {};

exports.readFile = (file, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  } else {
    cb(undefined, Buffer.from(fileContents));
  }
}

exports.writeFile = (file, buffer, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  } else {
    fileContents = buffer;
    cb(undefined, fileContents);
  }
}

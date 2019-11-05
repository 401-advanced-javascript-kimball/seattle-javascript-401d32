'use strict';

exports.readFile = (file, cb) => {
  if (!file || file.match(/bad/i)) {
    cb('invalid file');
  } else {
    cb(undefined, new Buffer('File Content'));
  }
}

// what are the inputs of fs.writeFile?
// what does it return? How does is handle errors?
exports.writeFile = () => { }
'use strict';

// step 1 UPGRADE!!
// const fs = require('fs').promises;
const fs = require('fs');

// step 2.1 
const net = require('net');
const client = new net.Socket();

let file = process.argv.slice(2).shift();

// Step 1
const util = require('util');
const fsRead = util.promisify(fs.readFile);
const fsWrite = util.promisify(fs.writeFile);

// Step 2.1
const readFile = (filePath) => fsRead(filePath);
const writeFile = (filePath, buffer) => fsWrite(filePath, buffer);
const upperCase = (buffer) => {
  const convertedBuffer = buffer.toString().trim().toUpperCase();
  return Buffer.from(convertedBuffer);
}

//Peter Carmichael 10: 06
const events = {
  READ_ERROR: 'read_error',
  WRITE_ERROR: 'write_error',
  WRITE_SUCCESS: 'write_success'
};

const alterFile = (path) => {
  return readFile(path)
    .then(contents => upperCase(contents))
    .then(buffer => {
      return writeFile(path, buffer)
        .catch(e => client.write(`${events.WRITE_ERROR} ${e}`));
    })
    .then(() => client.write(`${events.WRITE_SUCCESS} ${path}`))
    .catch(e => client.write(`${events.READ_ERROR} ${e.text}`))
  // fs.readFile( file, (err, data) => {
  //   if(err) { throw err; }
  //   let text = data.toString().toUpperCase();
  //   fs.writeFile( file, Buffer.from(text), (err, data) => {
  //     if(err) { throw err; }
  //     console.log(`${file} saved`);
  //   });
  // });
};

if (process.env.NODE_ENV !== 'test') {
  client.connect(3001, 'localhost', () => {
    console.log('Connected to tcp server');
    alterFile(file);
  });
}


// step 2.2
module.exports = {
  readFile,
  writeFile,
  upperCase,
  alterFile,
}

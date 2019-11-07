'use strict';

const io = require('socket.io-client');
const client = io.connect('http://localhost:3001');

let num = 0;
setInterval(() => {
  client.emit('speak', num++);
}, 500);
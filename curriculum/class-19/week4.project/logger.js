'use strict';

const io = require('socket.io-client');

const client = io.connect('http://localhost:3001');

client.on('messages', (payload) => {
  console.log('MESSAGEpayload);
});

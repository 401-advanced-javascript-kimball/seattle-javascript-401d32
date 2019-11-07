'use strict';

const io = require('socket.io-client');

const client = io.connect('http://localhost:3001/school');

client.on('message', (payload) => {
  console.log('heard', payload);
});

'use strict';

const net = require('net');

const client = new net.Socket();

const events = ['write', 'read', 'update'];

client.connect(3001, 'localhost', () => {
  console.log('App connected to host');
});

setInterval(() => {
  let event = events[Math.floor(Math.random() * events.length)];
  client.write(`${event} some is trying to ${event}`);
}, 500);
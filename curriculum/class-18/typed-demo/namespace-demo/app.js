'use strict';

const io = require('socket.io-client');
const client = io.connect('http://localhost:3001');
const school = io.connect('http://localhost:3001/school');

const faker = require('faker');

setInterval(() => {
  client.emit('speak', faker.hacker.phrase());
  school.emit('school-speak', 'Do Your homework');
}, 500);

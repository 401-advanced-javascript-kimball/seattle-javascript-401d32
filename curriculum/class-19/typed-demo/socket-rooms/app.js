'use strict';

const io = require('socket.io-client');
const client = io.connect('http://localhost:3001');
const school = io.connect('http://localhost:3001/school');

client.emit('speak', 'here is my CORE event');
school.emit('speak', 'here is my SCHOOL event');
school.emit('codefellows', 'here is my CODEFELLOWS event');
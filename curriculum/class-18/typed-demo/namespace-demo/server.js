'use strict';

const io = require('socket.io')(3001);

io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on('speak', payload => io.emit('message', payload));
});

const school = io.of('/school');
school.on('connection', (socket) => {
  socket.on('school-speak', payload => {
    school.emit('message', payload);
  });
});


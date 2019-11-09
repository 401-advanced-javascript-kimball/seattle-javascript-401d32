'use strict';

// created a connection with client
const io = require('socket.io')(3001);

io.on('connection', (socket) => {
  console.log("CORE connection", socket.id);
  socket.on('speak', (payload) => {
    io.emit('message', payload);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected', socket.id);
  })
});

// utilize the namespace feature + rooms
//  created specific server endpoints, with opt in channels

const school = io.of('/school');
school.on('connection', (socket) => {
  console.log('School connection', socket.id);

  socket.on('speak', (payload) => {
    school.emit('message', payload);
  });

  socket.on('join', (room) => {
    socket.join(room);
  });

  socket.on('codefellows', (payload) => {
    school.to('codefellows').emit('channel', payload);
  })
});

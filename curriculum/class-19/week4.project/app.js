'use strict';

const express = require('express');
const io = require('socket.io')(3001);
const uuid = require('uuid/v4');

const app = express();

io.on('connection', (socket) => {
  console.log('connected', socket.id);
});

const messages = {
  [uuid()]: {
    content: 'test',
    created_at: new Date(),
  },
};

app.get('/messages', (req, res, next) => {
  res.send(messages);
  io.emit('messages', messages);
});


app.listen(3000, () => {
  console.log('app listening')
})

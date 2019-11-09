'use strict';

const express = require('express');
const app = express();
const uuid = require('uuid/v4');
const io = require('socket.io')(3001);

io.on('connection', (socket) => {
  console.log('Connected', socket.id);
});

app.use(express.json());

const messages = {}
const newMessage = {
  id: uuid(),
  content: 'test',
  created_at: new Date(),
}
messages[newMessage.id] = newMessage;

app.get('/messages', (req, res, next) => {
  res.send(messages);
  io.emit('MESSAGE_FETCH', messages);
})
app.post('/messages', () => { })
app.put('/message/:id', () => { })

app.listen(3000, () => {
  console.log('API running');
});
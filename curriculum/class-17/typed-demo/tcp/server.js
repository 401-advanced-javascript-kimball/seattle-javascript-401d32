'use strict';

// the TCP connection livrary net
const net = require('net');
const uuid = require('uuid/v4');

// as the host server
const server = net.createServer();
const port = process.env.PORT || 3001;

const socketPool = {};

server.listen(port, () => {
  console.log(`TCP server is up on ::: ${port}`);
});

server.on('connection', (socket) => {
  const id = `Socket-${uuid()}`;
  socketPool[id] = socket;
  console.log('someone connected', id);
  socket.on('data', (buffer) => dispatchEvent(buffer));
});

const dispatchEvent = buffer => {
  let text = buffer.toString().trim();
  let [event, payload] = text.split(/\s+(.*)/);

  let eventPayload = { event, payload };
  for (let socket in socketPool) {
    socketPool[socket].write(JSON.stringify(eventPayload));
  }
}

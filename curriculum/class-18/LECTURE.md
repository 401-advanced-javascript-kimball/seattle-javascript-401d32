# Class 18 Socket.io

## A new Library!!

- Web Sockets
  - A feature built on top of TCP
  - facilitates a maintainable client <-> server relationship.
- Socket.io
  - Socket.io sometimes uses web socket, but is more or less jsut a representation of the relation that sockets try and produce.
    - Socket.io is responsible for maintaining it's own connection, not simple a socket connection.
  - Allows us to emit messages to any connected clients.
  - Benefits:
    - We can now cerate our own events!
    - We can also set up namespaces.
      - similar to endpoints in https REST.
      - We no longer have to deal with buffers!!!!
      - We can also have opt in "rooms".

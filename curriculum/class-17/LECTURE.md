# Class 17 TCP

## What is TCP?
- Transmission Control Protocol
  - Its a standard that defines how to connect with other computers / applications etc. -> to exchange data.
  - Uses IP (Internet Protocol)
    - The way the internet works is a combination of TCP and IP.
- HTTP (Hyper text transfre protocol), is layer on top of a TCP connection.

## The TCP connection
- A host says that things can connect to an address and port
- A client reaches our to that address and port, and makes the connection.
- It uses events to facilitate the connection process.
- It sends data back and forth using Streams
  - Streams are just small string based data packets passed between host and client/s
  - A TCP connection garantees that data will transfer between two applicatoins in the order they were sent.$$
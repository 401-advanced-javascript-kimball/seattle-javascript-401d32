# Class 16

## Event Based Systems

- The last 2 blocks => http / REST
- Many things in Javascript development are event based:

```js
// Browser event
document.addEventListener('DOMContentLoaded', dooSomething);

// JQUERY
$('button').on('click', handleClick);

// Express
app.listen()
app.get('/images', handleFetch);
```

- All of these systems use the same series of things:
  - 'When something happens' => 'To this specific thing' => 'do this specific action'

## Observer Pattern

- A standardized design paradigm in CS
  - Somthing called a "subject" maintains a list of dependencies called "observers"

- Publisher / Subscriber:
  - An object taht publishes events, and another object subscribes to those event.
  - Neither object cares about the other objects context. Only the event sibscribes and action made are important.

## Node Events Module

- Is a library that deals specifically with the Pub / Sub design pattern.
  - We can define a list of events that other servces can subscribe to.
  
```js
// Getting acces to the events library
const events = require('events');

// instatiating a variable as an instance of that library
const EventEmitter = new events();

EventEmitter.on('fetchMessage', (payload) => {
  http.post('api.facebook.com').send(payload);
});
EventEmitter.on('Singin', handleMessages);
EventEmitter.on('Singout', handleMessages);

//on the other end

EventEmitter.emit('fetchMessage', {userName: 'jacob', message: 'oh Heeeey'});

```

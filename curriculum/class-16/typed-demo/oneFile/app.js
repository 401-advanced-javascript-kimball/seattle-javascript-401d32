'use strict';

const events = require('events');
const EventEmitter = new events();

let data = [
  { id: 100, data: 'jacob' },
  { id: 101, data: 'is awesome' },
]

// Our Subscribers / Observers
EventEmitter.on('log', payload => log('log', payload));
EventEmitter.on('save', (payload) => {
  console.log(`Record ${payload.id} was saved`);
  EventEmitter.emit('log', payload);
});
EventEmitter.on('delete', handleDelete)

function log(event, payload) {
  let time = new Date();
  console.log({ event, time, payload });
}

function handleDelete(payload) {
  data = data.filter(item => {
    return item.id !== payload.id;
  });
  console.log(data);
}

// Our Publishers / Subjects
// EventEmitter.emit('save', { id: 100 });
EventEmitter.emit('delete', { id: 101 });
EventEmitter.on('deleteSuccess', () => console.log('so and so was deleted'));
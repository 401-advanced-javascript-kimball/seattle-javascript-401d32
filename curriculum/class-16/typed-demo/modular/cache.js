'use strict';

const events = require('./events');

events.on('save', handleSave);
events.on('delete', handleDelete);

function handleSave(payload) {
  console.log(`Record ${payload.id} was saved`);
  events.emit('update', { id: payload.id });
}

function handleDelete(payload) {
  console.log(`Record ${payload.id} was deleted`);
  events.emit('update', { id: payload.id });
}
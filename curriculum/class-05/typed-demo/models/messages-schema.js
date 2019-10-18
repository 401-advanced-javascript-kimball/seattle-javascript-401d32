'use strict';

const mongoose = require('mongoose');

const messages = mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, required: true, default: new Date() },
  updatedAt: { type: Date, required: true, default: new Date() },
});

messages.post('find', function (messages) {
  // console.log(messages);
});

messages.post('save', function (message) {
  // console.log('saving', message);
});

const mongooseModel = mongoose.model('messages', messages);

module.exports = mongooseModel;

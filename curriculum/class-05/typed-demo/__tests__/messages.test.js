'use strict';

const Messages = require('../models/messages-model.js');
const messages = new Messages();

require('./supergoose.js');

describe('Messages Model', () => {
  it('can create a new message', () => {
    let obj = { text: 'what a cool message you have there' };
    return messages.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
});

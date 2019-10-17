'use strict';

const Storage = require('./storage');

class Message extends Storage {
  constructor() {
    super();
    this.schema = {
      id: { type: String, required: true},
      text: {type: String, required:true},
      createdAt: {type: String, required: true},
      updatedAt: {type: String, required: true}
    }
  }
}

module.exports = Message

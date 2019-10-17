'use strict';

const uuid = require('uuid/v4');

// const schema = {
//   id: { type: String, required: true},
//   text: {type: String, required:true},
//   createdAt: {type: String, required: true},
//   updatedAt: {type: String, required: true}
// }

class Storage {
  constructor() {
    this.data = [];
  }

  get(id) {
    let response = this.data;
    if (id) {
      response = response.filter((message) => message.id == id);
    }
    return response;
  }

  create(record) {
    let newMessage = this.sanitize(record);
    if (newMessage.id) {
      this.data.push(newMessage);
    }
    return newMessage;
  }

  update(id, entry) {

  }

  delete(id) {

  }

  sanitize(entry) {

    let valid = true;
    let record = {};


    // Make sure our output matches the schema, without putting to much effort on the user.
    Object.keys(this.schema).forEach(field => {
      if (this.schema[field].required) {
        if (entry[field]) {
          record[field] = entry[field];
        } else {
          if (field === 'id') {
            record.id = uuid();
          } else if (field === 'createdAt') {
            record.createdAt = new Date();
          } else if (field === 'updatedAt') {
            record.upatedAt = new Date();
          } else {
            valid = false
          }
        }
      } else {
        if (entry[field]) {
          record[field] = entry[field];
        } else {
          record[field] = null;
        }
      }
    });

    return valid ? record : undefined;
  }
}

module.exports = Storage;

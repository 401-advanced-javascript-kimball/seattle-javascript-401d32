'use strict';

const schema = require('./messages-schema.js');

class Messages {

  get(_id) {
    if (_id) {
      return schema.findOne({ _id });
    }
    else {
      return schema.find({});
    }
  }

  create(record) {
    let newRecord = new schema(record);
    return newRecord.save();
  }

}

module.exports = Messages;

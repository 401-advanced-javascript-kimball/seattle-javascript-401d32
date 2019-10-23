'use strict';

const uuid = require('uuid/v4');

// for mongoose require mongoose schema

class Categories {
  constructor() {
    // this.schema = mongooseSchema;
    this.data = {
      [uuid()]: { name: 'Jacob', description: 'Jacob is so cool' },
    };
    /**
     * { 1: { name: '', description: ';}}
     */
  }

  get(filter) {
    // search this.data using filter
    const result = this.data[filter.id];
    if (result) {
      return Promise.resolve(result);
    }
    return Promise.resolve([this.data]);
  }

  create(entry) {
    // add a new entry to this.data

  }
}

module.exports = Categories;
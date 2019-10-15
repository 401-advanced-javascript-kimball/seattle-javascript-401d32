'use strict';

class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length++] = item;
    return this.length;
  }

  pop() {

  }

  map(callback) {
    let result = new List();
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this.data[i]));
    }

    return result;
  }

  forEach(callback) {

  }
}

module.exports = List;
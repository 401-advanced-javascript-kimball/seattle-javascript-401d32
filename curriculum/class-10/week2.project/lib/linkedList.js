'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      return this.toString();
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
    return this.toString();
  }

  // TODO: Add methods here
  toString() {
    let sentence = '';

    if (this.head === null) {
      sentence = 'Wooops, no words';
    }

    let current = this.head;
    while (current) {
      sentence = `${sentence} ${current.value}`;
      current = current.next;
    }

    return sentence;
  }
}

module.exports = LinkedList;

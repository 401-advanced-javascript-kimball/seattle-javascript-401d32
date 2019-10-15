'use strict';

// Classes are just a different syntax, acheiving the same goal as a constructor

class Message {
  constructor(text) {
    this.text = text;
    this.createdAt = new Date();
  }

  static messagelog() {

  }

  reverse() {
    return this.text.split('').reverse().join('');
  }
};

const classMessage = new Message("Hey ya'll!!!");

console.log(classMessage);
console.log(classMessage.reverse());
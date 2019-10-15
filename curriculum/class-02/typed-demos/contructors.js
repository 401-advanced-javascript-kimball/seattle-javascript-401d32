'use strict';

// constructors create object but have an inherited set of properties that come from js

const Message = function (text) {
  this.text = text;
  this.createdAt = new Date();
  this.updatedAt = new Date();
}

Message.prototype.reverse = function () {
  return this.text.split('').reverse().join('');
}

const newMessage = new Message('My super sweet message');

console.log(newMessage);
console.log(newMessage.reverse());


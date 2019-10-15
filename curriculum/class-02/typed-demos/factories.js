'use strict';

// Factories are just functions that explicitly return object;

const Message = function (text) {
  const message = {}
  message.text = text;
  message.createdAt = new Date();
  // Notice I am not using es6 syntax?
  message.reverse = function () {
    return this.text.split('').reverse().join('');
  }

  return message;
}

const mySweetMessage = Message('My Super Sweet message');

console.log(mySweetMessage);
console.log(mySweetMessage.reverse());
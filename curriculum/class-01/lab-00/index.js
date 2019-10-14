'use strict';

const hello = require('./src/hello');

const greeting = hello.sayHello('Heroku');
const goodbye = hello.sayGoodbye();

console.log(greeting, goodbye);
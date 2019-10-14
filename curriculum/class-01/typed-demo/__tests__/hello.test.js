'use strict';

const hello = require('../lib/hello');

describe('Testing my hello module', () => {
  it('Returns a string when used properly', () => {
    let message = hello.sayHello('Jacob');
    let expectedOutput = 'Hello, Jacob';
    expect(message).toEqual(expectedOutput);
  });

  it('Returns falsey when given an array', () => {
    let message = hello.sayHello(['Jacob']);
    let expectedOutput = null;
    expect(message).toEqual(expectedOutput);
  });
});
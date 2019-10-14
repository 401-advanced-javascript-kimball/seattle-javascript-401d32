'use strict';

/**
 * @module Hello
*/


/**
 * Method: sayHello()
 * @param {string} greetingString
 * @description prints a greeting to the console
 * @returns {string}
*/
exports.sayHello = (greeting) => {
  if (typeof greeting !== 'string') {
    return null;
  }
  return `Hello, ${greeting}`;
};

/**
 * Method: sayGoodbye()
 * returns: {string}
*/
exports.sayGoodbye = () => {
  return 'Good Bye';
};

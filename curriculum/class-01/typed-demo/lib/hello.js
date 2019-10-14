'use strict';

/**
 * @module Hello
 */


/**
 * Method: sayHello()
 * @param {string} greeting - the greeting proceeding 'Hello, '
 * @return {string}
 */
exports.sayHello = (greeting) => {
  if (typeof greeting !== 'string') {
    return null;
  }
  return `Hello, ${greeting}`;
};

/**
 * Method: goodbye()
 * @return {string}
 */
exports.goodBye = () => {
  return 'goodbye';
};

# Class 02

## Code Review

- Creating and exporting and testing! our first Node Module.

```js
  /**
   * Module: Validator
   **/
   
   const validator = module.exports = {};

  /**
   * Method: isValid
   * @params {any} input
   * @params {function} rules -  a function that defines what to validate;
   **/
   
  validator.isValid = function(input1, rules) {
    return rules(input1);
  }

  /**
   * Method: isString
   * @params {any} input - is this input a valid string
   * @returns {boolean}
   **/
   
  validator.isString = function(input) {
    return typeof input === 'string';
  }

  validator.isValid(1, (input2) => {
    return typeof input2 === 'number';
  });

  // pretend this is a test file ;)

  const validator = require('../validator');


  // This method of TDD is know as unit testing.
  describe('tests validator', () => {
    it('isString should return true when passed a string', () => {
      expect(validator.isString('some test string')).toEqual(true);
    });
  });

  //jsdoc config:
  jsdoc -c /docs/config/jsdoc.config.json

  // next: Integration test
```


## This (contextual)!!
[see demo](./typed-demos/this.js);

## OOP
- Object Oriented Programming;

- Creating objects of the same type
  - Object with similar properties and methods:

- JS has three methods for acheiving OOP:
  - factories
  - constructor
  - class

## Functional Programming
- No mutations = no side effects  
- 2 + 2 = 4, these inputs are never going to change
- add(num1, num2) = always be the same
- functions do as few things as possible
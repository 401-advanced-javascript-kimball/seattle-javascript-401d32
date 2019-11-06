'use strict';

jest.mock('fs');

// bring in our own libart
const file = require('../alter-file.js');

describe('tests our alter file library', () => {
  it('can read a file', () => {
    return file.readFile('test.txt')
      .then(contents => {
        expect(Buffer.isBuffer(contents)).toBeTruthy();
      });
  });

  it('can write to a file', () => {
    return file.writeFile('test.txt', Buffer.from('test'))
      .then(results => {
        expect(results).toBeUndefined();
      })
  })
});


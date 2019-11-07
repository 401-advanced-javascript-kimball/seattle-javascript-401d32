'use strict';

const logger = require('../logger');

describe('testing log handler', () => {
  it('should log on success', () => {
    let spy = jest.spyOn(console, 'log');
    const testBuffer = Buffer.from(JSON.stringify({ event: 'test', text: 'test' }));
    logger.handleData(testBuffer)
    expect(spy).toHaveBeenCalledWith('Ignored');
  })
})
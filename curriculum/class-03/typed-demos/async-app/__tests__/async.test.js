'use strict';

const asyncModule = require('../lib/async');

let warn;
let log;
let err;

describe('tests our generic logs from handler', () => {

  beforeEach(() => {
    warn = jest.spyOn(global.console, 'warn').mockImplementation(() => {});
    log = jest.spyOn(global.console, 'log').mockImplementation(() => {});
    err = jest.spyOn(global.console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it ('should use the appropriate log', () => {
    const errorMessage = 'oh no';
    const data = null;
    asyncModule.handler(errorMessage, data);
    expect(warn).toHaveBeenCalledWith(errorMessage);
    expect(err).not.toHaveBeenCalled();
    expect(log).not.toHaveBeenCalled();
  });

  it('Testing doCallback', (done) => {
    let testData = 'hello';
    let myHandler = (err, data) => {
      expect(err).toBe(null);
      expect(data).toEqual(testData);
      done();
    }
    asyncModule.doCallback(testData, myHandler);
  });
});

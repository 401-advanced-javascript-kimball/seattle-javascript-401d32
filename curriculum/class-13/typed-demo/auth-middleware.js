'use strict';

const User = require('./user-model');

module.exports = (req, res, next) => {
  try {
    let [authType, authString] = req.headers.authorization.split(' ');

    switch (authType.toLowerCase()) {
      case 'basic':
        return _authBasic(authString);
      case 'bearer':
        return _authBearer(authString);
      default:
        return _authError();
    }
  } catch (e) {
    _authError()
  }

  function _authBasic(string) {
    let base64Buffer = Buffer.from(string, 'base64')
    let bufferString = base64Buffer.toString();
    let [username, password] = bufferString.split(':');
    let authObject = { username, password };

    return User.authenticateBasic(authObject)
      .then(user => {
        if (user) {
          console.log('welcome back!');
          req.user = user;
          req.token = user.generateToken();
          next();
        } else _authError()
      });
  }

  function _authBearer(token) {

    return User.authenticateToken(token)
      .then(user => {
        if (user) {
          req.user = user;
          req.token = user.generateToken();
          next();
        } else _authError()
      })
  }


  function _authError() {
    next('Unauthorized');
  }
}
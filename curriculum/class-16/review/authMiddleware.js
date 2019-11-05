'use strict';

const User = require('./user-model');

// Check auth headers

module.exports = (req, res, next) => {
  try {
    let [authType, authString] = req.headers.authorization.split(' ');

    switch (authType.toLowerCase()) {
      case 'basic':
        return _authBasic(authString);
      case 'bearer':
        return _authBearer(authString);
      default:
        _authError();
    }
  } catch (e) {
    next(e);
  }

  function _authBasic(authString) {
    let base64Buffer = Buffer.from(authString, 'base64');
    let bufferString = base64Buffer.toString();
    let [username, password] = bufferString.split(':');
    let auth = { username, password };

    return User.authenticateBasic(auth)
      .then(user => _authenticate(user));
  }

  function _authBearer(authString) {
    return User.authenticateToken(authString)
      .then(user => _authenticate(user));
  }

  function _authenticate(user) {
    if (user) {
      req.user = user;
      req.token = user.generateToken();
      next();
    }
    else {
      _authError();
    }
  }

  function _authError() {
    next({ status: 401, statusMessage: 'Unauthorized', message: 'Invalid User ID/Password' });
  }

}
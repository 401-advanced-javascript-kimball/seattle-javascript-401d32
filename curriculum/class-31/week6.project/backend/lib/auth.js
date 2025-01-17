'use strict';

const User = require('./user.schema.js');

module.exports = (users) => (req, res, next) => {

  try {
    let [authType, authString] = req.headers.authorization.split(/\s+/);

    switch( authType.toLowerCase() ) {
      case 'basic':
        return _authBasic(authString);
      case 'bearer':
        return _authBearer(authString);
      default:
        return _authError();
    }
  }
  catch(e) {
    console.log(e);
  }


  function _authBasic(str) {

    let base64Buffer = Buffer.from(str, 'base64');
    let bufferString = base64Buffer.toString();
    let [username, password] = bufferString.split(':');
    let auth = {username,password};
    return User.authenticateBasic(users, auth)
      .then(user => _authenticate(user) )
      .catch(next);
  }

  function _authBearer(authString) {
    return User.authenticateToken(users, authString)
      .then( user => _authenticate(user) )
      .catch(next);
  }

  function _authenticate(user) {
    if(user) {
      req.user = user;
      req.token = user.generateToken();
      next();
    }
    else {
      _authError();
    }
  }

  function _authError() {
    next('Invalid User ID/Password');
  }

};

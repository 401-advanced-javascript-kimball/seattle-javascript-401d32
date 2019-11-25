'use strict';

const uuid = require('uuid/v4');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

function hashPassword(string) {
  return bcrypt.hashSync(string, 10);
}

class User {
  constructor(user) {
    this.id = uuid();
    this.username = user.username;
    this.password = hashPassword(user.password);
    this.created_at = new Date();
  }

  static async authenticateBasic(users, auth) {
    let user = users.find(user => {
      return user.username === auth.username;
    });
    if (user) {
      return user.comparePassword(auth.password);
    } else {
      return {Error: 'Invalid password'};
    }
  }

  static async authenticateToken(users, token) {
    let parsedToken = jwt.verify(token, process.env.SECRET || 'secretkey');
    return users.find(user => {
      return user.id === parsedToken.id;
    });
  }

  comparePassword(password) {
    if (bcrypt.compareSync(password, this.password)) {
      return this;
    } else {
      return null;
    }
  }

  generateToken() {
    let token = {
      id: this.id,
    };
    return jwt.sign(token, process.env.SECRET || 'secretkey');
  }
}

module.exports = User;

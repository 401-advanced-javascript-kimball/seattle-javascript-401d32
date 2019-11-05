'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const user = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, },
  email: { type: String },
});

user.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

// query our data
// compare password
user.statics.authenticateBasic = function (auth) {
  return this.findOne({ username: auth.username })
    .then(user => user.comparePassword(auth.password));
}

user.statics.authenticateToken = function (token) {
  let parsedToken = jwt.verify(token, process.env.SECRET);

  return this.findOne({ _id: parsedToken.id })
    .then(user => {
      return user
    })
    .catch(e => e);
}

user.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
    .then(isValid => isValid ? this : null);
}

user.methods.generateToken = function () {
  let tokenData = {
    id: this._id,
  };

  return jwt.sign(tokenData, process.env.SECRET);
};

module.exports = mongoose.model('user', user);
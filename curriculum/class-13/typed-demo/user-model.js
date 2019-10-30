'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const user = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
  role: { type: String, required: true, default: 'user', enum: ['user', 'editor', 'admin'] },
});

user.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

user.statics.authenticateBasic = function (authObject) {
  let query = { username: authObject.username };
  return this.findOne(query)
    .then(user => user.comparePassword(authObject.password))
    .catch(console.error);
}

/**
 * Verifying a token and returning a user
 */
user.statics.authenticateToken = function (token) {
  let parsedToken = jwt.verify(token, process.env.SECRET);
  return this.findOne({ _id: parsedToken.id });
}

user.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
    .then(isValid => isValid ? this : null);
}

/**
 * Signing of token, creates a new JWT
 */
user.methods.generateToken = function () {
  let tokenData = {
    id: this._id,
    role: this.role,
  }
  // What can we add to this token to make it expire?
  return jwt.sign(tokenData, process.env.SECRET);
}

module.exports = mongoose.model('user', user);

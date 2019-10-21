'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: { type: String },
  description: { type: String },
});

module.exports = mongoose.model('categories ', categories);
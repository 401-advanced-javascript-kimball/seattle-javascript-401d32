'use strict';

const mongoose = require('mongoose');
require('./products');

const categories = mongoose.Schema({
  name: String,
  description: String,
}, {
  toObject: { virtuals: true },
}, {
  toJSON: { virtuals: true }
});

categories.virtual('products', {
  ref: 'products',
  localField: 'name',
  foreignField: 'category',
  justOne: false,
});

categories.pre('find', function () {
  try {
    this.populate('products');
  } catch (e) {
    console.error('Find Categories error');
  }
});

module.exports = mongoose.model('categories', categories);
'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
}, { toObject: { virtuals: true }, toJSON: { virtuals: true } });

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
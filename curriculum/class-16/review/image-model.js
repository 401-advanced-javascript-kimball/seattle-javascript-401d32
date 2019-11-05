'use strict';

const mongoose = require('mongoose');

const image = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  user_id: { type: String, required: true },
  url: { type: String, required: true },
  created_at: { type: Date, required: true },
});

module.exports = mongoose.model('images', image);
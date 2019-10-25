'use strict';

const express = require('express');
const mongoose = require('mongoose');

const categories = require('./categories');
const products = require('./products');

mongoose.connect('mongodb://localhost:27017/class10', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
app.use(express.json());

app.get('/categories', async (req, res) => {
  const data = await categories.find({})
  res.json(data);
})

app.post('/categories', async (req, res) => {
  const newCategory = new categories(req.body);
  const data = await newCategory.save();
  res.json(data);
})


app.get('/products', async (req, res) => {
  const data = await products.find({})
  res.send(data);
})

app.post('/products', async (req, res) => {
  const newProduct = new products(req.body);
  const data = await newProduct.save();
  res.send(data);
})


app.listen(3000, () => console.log('App running'));
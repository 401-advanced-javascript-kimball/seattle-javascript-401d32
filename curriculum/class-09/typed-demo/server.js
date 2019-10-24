'use strict';

// what 3rd party libraries ? frameworks are we leveraging
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/class09', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const categories = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
});

const products = mongoose.Schema({
  name: { type: String, required: true },
  description: Number,
});

const Categories = mongoose.model('categories', categories);
const Products = mongoose.model('products', products);

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/categories', async (req, res) => {
  const data = await Categories.find({});
  res.send(data);
});
app.get('/categories/:id', (req, res) => {
  const categoryId = req.params.id
  Categories.findById(categoryId)
    .then(data => {
      res.send(data);
    })
    .catch(e => {
      res.send('No Category by that Id found');
    });

  // try {
  //   const categoryId = req.params.id
  //   const data = await Categories.findById(categoryId);
  //   res.send(data);
  // } catch (e) {
  //   res.send('No category by that Id found');
  // }
});

app.post('/categories', async (req, res) => {
  try {
    const newCategory = new Categories(req.body);
    const categoryData = await newCategory.save();
    res.send(categoryData);
  } catch (e) {
    res.send(' Wooopsies :(');
  }
});

app.put('/categories/:id', async (req, res) => {
  try {
    const categoryData = req.body;
    const updatedCategory = await Categories.findByIdAndUpdate(
      req.params.id,
      categoryData,
      { new: true }
    );
    res.send(updatedCategory);
  } catch (e) {
    res.send(e);
  }
});

app.delete('/categories/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const deletedCategory = await Categories.findByIdAndDelete(categoryId);
    res.send(deletedCategory);
  } catch (e) {
    res.send(e);
  }
});


app.get('/products', () => { });
app.get('/products/:id', () => { });
app.post('/products')
app.put('/products/:id')
app.delete('/products/:id')

app.listen(3000, () => {
  console.log('app running');
});
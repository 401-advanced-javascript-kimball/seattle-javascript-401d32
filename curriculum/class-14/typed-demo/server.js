'use strict';

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const auth = require('./auth');
const User = require('./user-model');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.json());

app.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then((user) => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    })
    .catch(next);
});

app.post('/signin', auth(), (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

app.get('/admins', auth('delete'), (req, res, next) => {
  res.send('You an admin');
});

app.get('/users', auth('delete'), (req, res, next) => {
  res.send('you a lowly user');
});

app.listen(3000, () => {
  console.log('App is runnnig');
});
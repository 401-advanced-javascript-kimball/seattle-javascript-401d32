'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const User = require('./user-model');
const Image = require('./image-model');
const auth = require('./authMiddleware');

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/signup', (req, res, next) => {
  const user = new User(req.body);
  user.save()
    .then(user => {
      res.send(user.generateToken());
    })
    .catch(e => next(e));
});

app.post('/signin', auth, (req, res, next) => {
  if (req.user) {
    res.send(req.token);
  } else {
    next('No user found');
  }
});

app.get('/images', auth, (req, res, next) => {
  Image.find({})
    .then(images => {
      res.send(images);
    })
    .catch(next);
});

app.post('/images', auth, (req, res, next) => {
  const image = new Image(req.body);
  image.created_at = new Date();
  image.save()
    .then(img => {
      res.send(img);
    })
    .catch(next);
});

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`App is listening on port:: ${port}`);
    });
  }
};

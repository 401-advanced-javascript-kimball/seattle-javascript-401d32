'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
// const router = require('../router');
const categoryRouter = require('../routes/categories-router');

// Cross origin resource sharing
app.use(cors());
// API route logging
app.use(morgan('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// undefined router;
// app.use('/api', router);
app.use('/api', categoryRouter);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`Server up on ${port}`));
  }
}

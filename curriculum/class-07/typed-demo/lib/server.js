'use strict';

const express = require('express');

require('../docs/config/swagger');

const app = express();
app.use(express.json());
// app.use(addsNumbers);
// app.use(LOGGER);


// A memory based data storage
//  Stores Post objects
const db = [];

// function LOGGER(request, response, next) {
//   console.log(`${request.method}`);
//   next();
// }

// function errorHandler(status) {
//   return function (request, response) {
//     response.status(status);
//     response.send('Error found');
//   };
// }

const errorHandler = (status) => (request, response) => response.status(status).send('Error found');

// function logNumbers(request, response, next) {
//   console.log('Here are your numbers', request.numbers);
//   next();
// }

// function addsNumbers(request, response, next) {
//   request.numbers = [1, 2, 3];
//   next();
// }

// function handleNewRoute(request, response) {
//   let number = request.numbers;
//   response.send(`Heres those number you like so much ${number[0]} ${number[1]} ${number[2]}`);
// }

/**
 * Responds with a list of post objects.
 * @route GET /posts
 * @returns {array} 200 - [{}, {}]
 * @returns {error} 500 - server error
 */

app.get('/posts', (request, response) => {
  response.json(db);
});

/**
 * Responds with a newly created Post object.
 * @route POST /posts
 * @returns {Object} 200 - { name: '', content: ''}
 * @returns {error} 500 - server error
 */
app.post('/posts', (request, response) => {
  const newPost = {
    name: request.body.name,
    content: request.body.content,
  };
  db.push(newPost);
  response.json(newPost);
});


// app.get('/newroute', logNumbers, handleNewRoute);
// app.patch();
// app.delete();
app.use(errorHandler(404));

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT || process.env.PORT || 3000, () => {
      console.log('Server listening');
    });
  },
};

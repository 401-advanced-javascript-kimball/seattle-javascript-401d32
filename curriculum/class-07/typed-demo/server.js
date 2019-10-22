'use strict';

const express = require('express');

const app = express();
app.use(addsNumbers);
app.use(LOGGER);

function LOGGER(request, response, next) {
  console.log(`${request.method}`);
  next();
}

// function errorHandler(status) {
//   return function (request, response) {
//     response.status(status);
//     response.send('Error found');
//   };
// }

const errorHandler = (status) => (request, response) => response.status(status).send('Error found');

function logNumbers(request, response, next) {
  console.log('Here are your numbers', request.numbers);
  next();
}

function addsNumbers(request, response, next) {
  request.numbers = [1, 2, 3];
  next();
}

function handleNewRoute(request, response) {
  let number = request.numbers;
  response.send(`Heres those number you like so much ${number[0]} ${number[1]} ${number[2]}`);
}

app.get('/', logNumbers, (request, response) => {
  response.status(200).send('You have hit the slash route');
});
app.get('/newroute', logNumbers, handleNewRoute);
// app.post();
// app.patch();
// app.delete();
app.use(errorHandler(404));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('My server is running on port 3000');
});

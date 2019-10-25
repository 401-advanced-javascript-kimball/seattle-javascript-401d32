'use strict';

const express = require('express');
const { buildSchema } = require('graphql');
const expressGraphql = require('express-graphql');
// const router = express.Router();
// const router = require('./memory');
const router = require('./mongo');

const app = express();

const simpleSchema = buildSchema(`
  type Query {
    message: String
  }
`);

const simpleResolver = {
  message: () => 'Hey there!!',
}

const graph = expressGraphql({
  schema: simpleSchema,
  rootValue: simpleResolver,
  graphiql: true
});

// router.use('/graphql', graph);

app.use(router);

app.listen(3000, () => console.log('App up'));
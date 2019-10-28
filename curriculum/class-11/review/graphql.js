'use strict';

const Todos = require('./todo-model.js');
const { buildSchema } = require('graphql');
const expressGraphql = require('express-graphql');
const todoModel = new Todos();

// Our grahql API

// Step one define Our Schema => this includes queries and data types, and eventally resolver
const todoSchema = buildSchema(`
  type Todo {
    id: ID!
    text: String!
    category: String
    assignee: String!
    difficulty: Int!
    complete: Boolean!
  }

  type Query {
    todo(id: ID!): Todo
    todos: [Todos]
  }

  type Mutation {
    createTodo(text: String!, category: String, complete: Boolean, assignee: String!, difficulty: Int): Todo
  }
`);

const rootReducers = {
  todos: (args) => {
    todoModel.get()
      .then(data => {
        const output = {
          count: data.length,
          results: data,
        };
        return output;
      })
      .catch((e) => {
        console.error(e);
      });
  },

  todo: (args) => {
    todoModel.get(args.id)
      .then(result => result[0])
      .catch(console.error);
  },

  createTodo: (args) => {
    todoModel.create(args)
      .then(result => result)
      .catch(console.error);
  }
};

module.exports = expressGraphql({
  schema: todoSchema,
  rootValue: rootReducers,
  graphiql: true,
});
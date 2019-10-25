'use strict';

const express = require('express');
const { buildSchema } = require('graphql');
const expressGraphql = require('express-graphql');
const mongoose = require('mongoose');

const router = express.Router();

mongoose.connect('mongodb://localhost:27017/class10', { useNewUrlParser: true, useUnifiedTopology: true });

const categoriesSchema = mongoose.Schema({
  name: { type:String, required:true },
  description: { type:String, required:true },
});
const Categories = mongoose.model('categories', categoriesSchema);

const schema = buildSchema(`
  type Category {
    id: ID!
    name: String
    description: String
  }
  
  type Query {
    categories: [Category]
  }
  
  type Mutation {
    createCategory(name: String, description: String): Category 
  }
`)

const resolvers = {
  categories: async function() {
    const data = await Categories.find({});
    return data;
  },
  createCategory: async function (args) {
    const newCategory = new Categories(args);
    const data = await newCategory.save();
    return data;
  }
};

router.use('/graphql', expressGraphql({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

module.exports = router;

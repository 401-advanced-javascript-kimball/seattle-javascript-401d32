'use strict';

const Model = require('../mongo.js');
const schema = require('./categories-schema.js');


class Categories extends Model {
    constructor() {
        super(schema);
    }
}

// How can we connect ourselves to the mongo interface?
// What do we export?

module.exports = Categories;
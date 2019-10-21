const Categories = require('../../models-singular/categories.js');
let categories = new Categories();

const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  // it('can create() a new category', (done) => {
  //   let newCategory = { name: "test Category", description: "testing" };
  //   categories.create(newCategory)
  //     .then(results => {
  //       expect(results.name).toEqual("test Category");
  //       done();
  //     })
  //     .catch(err => console.error(err));
  // });

  // it('can get() a category', (done) => {
  //   categories.get()
  //     .then(results => {
  //       expect(results.length).toBe(1)
  //       done();
  //     });

  // });

  it('can get() all categories', () => {
  });

  it('can update() a category', () => {
  });

  it('can delete() a category', () => {
  });

});
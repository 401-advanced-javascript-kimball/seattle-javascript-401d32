# Class 37

## React Forms

In a web app we're gonna being using forms a ton for many feaures of a large scale web app.

Today we're looking at Form libraries.

### react-jsonschema-form
- takes in a schema for inputs, formatted in json
- outputs a boilerplate form, that runs a submit function that you pass into it

### redux-forms
- Takes in a submit function, but requires you to compose it.
  - importing built in `input` fields
  - Uses your redux store to select input values.

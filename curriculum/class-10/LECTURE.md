# Class 10

## Mongogoose Virtauls:
- categories.virtual
- Let us populate a virtual field that doesn't formally exist on our schema.

- We can combine lifecycle hooks to take fields that match on seperate models, and associate them.

## Graphql
- Graphql is an alternative to REST:
  - While REST has a huge list of endpoints and methods, Graphql says:
    - Lets just use one ednpoint and onde method, and let the user specify exclty what they want.
    - Graphql functions by letting developers specifiy a Schema, which has a list queries that can be performed on data, and their respective resolvers:
    - Resolver is just whatever operations are needed to fulfill a query.

```js
type Query{
  people: [peopleTypes]
}

{
  people: () => people.find();  
}

```

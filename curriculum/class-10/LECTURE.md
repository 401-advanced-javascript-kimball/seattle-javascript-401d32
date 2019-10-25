# Class 10

## Mongogoose Virtauls:
- categories.virtual
- Let us populate a virtual field that doesn't formally exist on our schema.

- We can combine lifecycle hooks to take fields that match on seperate models, and associate them.

## Graphql
- Graphql is an alternative to REST:
  - While REST has a huge list of endpoints and methods, Graphql says:
    - Lets just use one endpoint and one method, and let the user specify exactly what they want.
    - Graphql functions by letting developers specify a Schema, which has a list queries that can be performed on data, and their respective resolvers:
    - Resolver is just whatever operations are needed to fulfill a query.

```js
type Query {
  people: [peopleTypes]
}

{
  people: () => people.find();  
}
```

Mutations
- When we want to make changes to our data, graphql lets us create a special type of query known as a `mutation`:
- These are declared much like queries but should be placed under `type Mutation`.

```js
input MessageInput {
  content: String
  author: String
}

type Message {
  id: ID!
  content: String
  author: String
}

type Query {
  getMessage(id: ID!): Message
}

type Mutation {
  createMessage(input: MessageInput): Message
  updateMessage(id: ID!, input: MessageInput): Message
}
```



# Class 07
## Express!!!

What is Express?

-  A framework, used to HTTP powered APIs in Javascript.
  - What is a Framework? vs What is a Library?
  - A Framework gives you a lot of code, and let's the developer add small pieces of their own code.
  - A Library gives you small pieces of code, that you fit into your larger code base.


- Non opinionated. This means its not going to make a lot of decisions for you.
  - It wants you to be able to make all the things.


## Middleware
- A piece of functionality that site between the incoming request, and outgoing response.

## HTTP Routes
- 200: OKAY, This means everything went as expected.
- 404: not found, when the specified location does not exist.
- 401: Unauthorized, user lack authorization credentials.
- 400: bad request, when the client has improper request formatting.
- 500: Server error, this is worst case sce


## Function Currying
- A function that returns another function

```js

function myCurriedFunction(name) {

  return function(greeting) {
    return `${greetting} ${name}`;
  }
}

```

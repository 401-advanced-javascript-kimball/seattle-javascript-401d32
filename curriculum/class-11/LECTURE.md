# Auth and Queues + Stacks

## Queues and Stacks

### Abstract Data Structures
- What is an Abstract Data Structure?
- Only deinfed by its behaviour, not a specific implementation.

#### Stack:
- A stack has the behavior: FiLo (First in last out);
  - Whatever object is pushed onto the stack will be the last to be popped.
    - Push (adds an item to the stack)
    - Pop (Removed an item from the stack)
    - PeeK (look at whats in the stack)
    - Top / and a Bottom


#### Queue
- Follow the reverse behavior FiFo (First in, first Out)
- Whatever object is enqueued into the queue will be the first object to be dequeued.
  - Enqueue (adds an item to the rear of the queue)
  - Dequeue (removes an item from the front)
  - Tracks a rear and a front.

Req -> middleware -> Res
```js
app.get('/users', requestTime, handleErrors, handleUsers)
```

## Auth

- Authentication: Who are you?
- Authoriztion: Are you allowed to do what you trying to do (Based on who you are)?

- String based Authentication:
  - We have the user make a user object?
    - username
    - password
    - sent to our service as an encypted string. 
  - Than we need to parse the string and decide, is this a new user or an existing user.
  - Creating an one way encrypted token, which the user can store and use for all auth requests.













# Class 38

## Review

Creating a Redux Store:
- Action & action creators
- Reducer
- Initial state, using createStore from redux.

Redux Thunk
- What is a Thunk?
  - Is a function that runs sub routine.
  - A function that calls another function after a costly operation is completed.
  - Function currying
    - We can compose a function that uses other functions to compose something more complex.
  - Redux uses actions (basic objects) to modify state.
    - If we need to run any logic before those actions are dispatched, we need to turn our action creators into curried functions.
  - We turn to middleware in order to deal with actions that try to do more than just modify our redux state.

redux middlware
 - Middleware: A piece of software that runs in between two other prices of software.
 - Redux dispatches actoins, and before that action hits our reducer(s), some code is applied to it.
   - In the case of async actions, we want to apply some thunks.
   - Redux thunks, make sure our action is on object, before we pass it to our reducer. 
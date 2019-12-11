# Class 41

Redux Review

- What do need to implement for a Redux store
  - Initialize our store,
  - Actions to run against our reducers
  - Reducer to manage operations on our store

- How do we initialize a Redux store?
```js
import { createStore, combineReducers } from redux;

import userReducer from '../path/to/reducer';
import messageReducer from '../path/to/reducer';

// Creates a unifies state for our Redux Store
const reducers = combineReducers({
  userData: userReducer,
  messageData: messageReducer,
});

const store = () => createStore(reducers);

export default store;
```

- Create an action that adds a message to our messageData state property:
  - a function the returns an action ( which is just and object )
```js
export const addMessage = (payload) => {
  return {
    type: 'ADD_MESSAGE',
    payload: payload,
  }
}
```

- Create a reducer that can use this action as well as remove
```js
function (state = [], action) {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.payload];
    case 'DELETE_MESSAGE':
      return state.filter(item => item.id !== action.payload)
    default:
      return state;
  }
}
```

- What is a thunk used for in Redux?
  - It delays the dispatching of and action, for async events.
- Why is this important for Redux?
  - Becuase Redux only wants object dispatched.

- How might we implement thunks into our Redux store?
```js
// get middleware in './store/index.js'
import { createStore, combineReducers, applyMiddleware } from redux;
import { composeWithDevTools } from 'redux-devtools';

import thunk from 'redux-thunk';
...

// Applies middleware to store.
const store = () => createStore(reducers, applyMiddleware(thunk));
```

- What is redux middleware?
 - Anything that you want to happen BEFORE the action hits the reducer.


- How do we connect React Components to our Store?
```js
import React from 'react';
import { connect } from 'react-redux';

import actions from '../path/to/actions';

const App = () => {
  ...
}

const mapStateToProps = (state) => ({
  user: state.userData,
  messages: state.messageData,
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: (data) => dispatch(actions.addMessage(data)),
  postMessage: (data) => dispatch(actions.postMessage(data)),
});

// connect these functions together
export default connect(mapStateToProps, mapDispatch)(App);
```

- How do we create an async action?
  - Let's add one!
  - How do we use this in our component?
```js

export const postMessage = (data) => (dispatch) = {
  return fetch(data)
    .then(results => results.json())
    .then(data => dispatch(formatData(data)))
}

export formatData = (data) => (dispatch) => {
  // do our formatting
  dispatch(addMessage(result));
}

export const addMessage = (payload) => {
  return {
    type: 'ADD_MESSAGE',
    payload: payload,
  }
}
```

## React Native
- A library for creating native mobile user interfaces.
  - ReactDOM, to render our components to the js DOM.
  - No we using build tools to render our components in 2 different environments:
    - Android
    - iOS
- Expo, is management workflow, much like Rails for Ruby
  - Includes a cli that handle, building, testing, developing, and publishing React Native Apps.
  - Functions like create-react-app.
    - No expensive build processes involved in development, expo handle hardware emulation in it's own app.

- React Native projects can talk directly to the built in Phone APIs:
  - Phones calls
  - View contacts
  - Send Emails!
  - Use the Camera!
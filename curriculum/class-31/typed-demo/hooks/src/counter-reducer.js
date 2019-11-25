import React, { useReducer } from 'react';

// define a intialState and reducer function here
const initialState = {
  count: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
}

const Counter = () => {
  let [bananas, bananaMan] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Reducer Counter: {bananas.count}</h2>
      <button onClick={() => bananaMan({ type: 'increment', payload: 2 })}>
        +
      </button>
      <button onClick={() => bananaMan({ type: 'decrement', payload: 2 })}>
        -
      </button>
    </div>
  )
}

export default Counter;

import React, { useState, useEffect } from 'react';

import Counter from './counter-reducer';

const App = () => {
  /**
   * this.state = {
   *  count: 0
   * }
   */

  // const [state, setState] = useState({ count: 0 });
  let [count, setCount] = useState(0);
  let [name, setName] = useState('Jacob');

  // this replaces componentDidMount, componentDidUpdate, componentWillUnmount()
  useEffect(() => {
    console.log('render', count);
    // Cleanup and side effects that may have been introduced
    return () => {
      // remove socktets, unsubscribe from event handlers
      console.log('unmount', count);
    }
  }, []);

  const IncrementCount = () => {
    setCount(++count);
    // this.setState({ count: ++count })
  }

  const handleName = (e, string) => {
    console.log(string);
    setName(e.target.value);
  }

  return (
    <>
      <h1>Hello {name}</h1>
      <input onChange={(e) => handleName(e, 'button input')} />
      <p>Count: {count}</p>
      <button onClick={IncrementCount}>Increment</button>
      <Counter />
    </>
  )
}

export default App;

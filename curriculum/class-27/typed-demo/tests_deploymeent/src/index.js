import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/counter';

class Root extends React.Component {
  render() {
    return (
      <>
        <h1>Testing our App!</h1>
        <Counter />
      </>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Root />, rootElement);
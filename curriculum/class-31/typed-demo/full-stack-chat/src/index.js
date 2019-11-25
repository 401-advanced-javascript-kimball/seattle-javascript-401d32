import React from 'react';
import ReactDOM from 'react-dom';

import Auth from './components/auth';

class App extends React.Component {
  render() {
    return (
      <Auth />
    )
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

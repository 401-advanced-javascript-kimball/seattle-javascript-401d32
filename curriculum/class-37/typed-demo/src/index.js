import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import User from './user';
import Messages from './ messages';

import createStore from './store/';
const appStore = createStore();

const App = () => {
  return (
    <Provider store={appStore}>
      <User />
      <Messages />
    </Provider>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
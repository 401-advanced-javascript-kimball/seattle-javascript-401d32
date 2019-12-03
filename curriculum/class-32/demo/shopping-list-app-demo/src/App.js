import React from 'react';
import './App.css';

import List from './components/list.js'

function App() {
  return (
    <div className="App">
      <h1>Shopping List App</h1>
      <List storeName="Fred Meyer" />
      <List storeName="Uwajimaya" />
    </div>
  );
}

export default App;

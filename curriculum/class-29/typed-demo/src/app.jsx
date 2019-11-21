import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>

            </li>
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
          </ul>
        </nav>
        <Route
          exact
          path="/"
          render={() => {
            return <h1>My App!</h1>
          }}
        />
        <Route
          exact
          path="/about-me"
          render={() => {
            return <h1>You've reached about me!</h1>
          }}
        />
      </BrowserRouter>
    )
  }
}

export default App;

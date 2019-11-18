import React from 'react';

// getting our sass is as simple as:
import './app.scss'

const Header = () => (
  <header>
    <h3>My Awesome App</h3>
    <p>is so great</p>
  </header>
)

const Footer = () => <footer>&copy; Code Fellows</footer>

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      words: 'type something',
      clicks: 0,
    }
  }

  handleInput = (e) => {
    const input = e.target.value;
    this.setState({ words: input });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    return (
      <>
        <Header />
        <h3>{this.state.words}</h3>
        <h4>{this.state.clicks}</h4>
        <input type="text" onChange={this.handleInput} />
        <button onClick={this.handleClick}>Click Me</button>
        <Footer />
      </>
    )
  }
}

export default App;

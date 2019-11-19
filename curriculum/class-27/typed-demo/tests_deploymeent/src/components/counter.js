import React from 'react';

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  handleCount = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Changed: {this.state.count}</p>
        <button onClick={this.handleCount}>Add to Count</button>
      </div>
    )
  }
}

export default Counter;
import React from 'react';

import Header from './components/header';
import Form from './components/form';
import Footer from './components/footer';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'My Awesome App',
      copywrite: 'Code Fellows',
      count: 0,
      results: [],
    }
  }

  handleData = (count, results) => {
    this.setState({ count, results });
  }


  render() {
    console.log(this.state.count, this.state.results);
    return (
      <React.Fragment>
        <Header title={this.state.title} />
        <Form handleData={this.handleData} />
        <ul>
          {this.state.results.map((person, idx) => {
            return <li key={idx}>{person.name}</li>
          })}
        </ul>
        <Footer display={this.state.copywrite} />
      </React.Fragment>
    )
  }
}

export default App;
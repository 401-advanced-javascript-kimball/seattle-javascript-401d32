import React from 'react';
import superagent from 'superagent';


class Form extends React.Component {

  handleSubmit = async (e) => {
    e.preventDefault();
    let data = await superagent.get('https://swapi.co/api/people?format=json');
    let count = data.body.count;
    let results = data.body.results;
    // console.log(data);
    this.props.handleData(count, results);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">Click for people data...</button>
      </form>
    )
  }
}

export default Form;

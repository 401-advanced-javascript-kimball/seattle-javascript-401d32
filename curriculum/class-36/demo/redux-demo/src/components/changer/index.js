import React from 'react';
import { connect } from 'react-redux';

import {actions} from '../../store/person.store';
console.log('person actions:', actions);

class Changer extends React.Component {
  render() {
    return (
      <section>
        <div>{this.props.person.name}</div>
        <button onClick={() => this.props.handleChange(15)}>Change Name!</button>
        <button onClick={this.props.handleReset}>Reset!</button>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  person: state.person
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleChange: num => dispatch(actions.changeName(num)),
  handleReset: () => dispatch(actions.resetName())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Changer);
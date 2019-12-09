import React from 'react';
import { connect } from 'react-redux';

import * as actions from './store/actions';

const App = (props) => {
  return (
    <>
      <button onClick={props.get}>Get Teams</button>
      <ul>
        {props.data.results.map((record, idx) => (
          <li key={idx}>{record.name}</li>
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(actions.fetchData),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
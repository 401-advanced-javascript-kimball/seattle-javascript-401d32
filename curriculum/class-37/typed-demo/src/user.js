import React from 'react';
import { connect } from 'react-redux';

import actions from './store/user/user-actions';

const User = (props) => {
  console.log(props);
  return (
    <>
      <h1>Hello</h1>
      <button onClick={props.login}>Login</button>
    </>
  )
}


// this function gets passed an object called state which can be used to attach properties onto component props
const mapStateToProps = state => ({
  user: state.user,
});

// this function gets passed a function called dispatch which can be call actions for the reducer.
const mapDispatchToProps = dispatch => ({
  login: () => dispatch(actions.login({ username: 'test' })),
  logout: () => dispatch(actions.logout),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
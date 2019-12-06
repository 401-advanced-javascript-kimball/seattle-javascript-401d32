const actions = {}

actions.login = payload => {
  return {
    type: "LOGIN",
    payload,
  }
}

actions.logout = () => {
  return {
    type: 'LOGOUT',
  }
}

export default actions;
const actions = {};

actions.get = (payload) => {
  return {
    type: 'GET',
    payload,
  };
};

actions.post = (payload) => {
  return {
    type: 'POST',
    payload,
  };
};

actions.put = (id) => {
  return {
    type: 'PUT'
  };
};

actions.destroy = (id) => {
  return {
    type: 'DELETE',
  };
};

export default actions;

export const api = 'https://api-js401.herokuapp.com/api/v1/teams';

export const fetchData = dispatch => {
  return fetch(api)
    .then(results => results.json())
    .then(data => {
      dispatch(addData(data));
    });
};

export const addData = payload => {
  return {
    type: 'GET',
    payload,
  };
};
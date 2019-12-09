import reducer from '../store/reducers';

describe('Testing reducers', () => {
  it('Runs our get Properly', () => {
    let initialState = {};
    let action = {
      type: 'GET',
      payload: { name: 'jacob' },
    }

    expect(reducer(initialState, action)).toEqual(action.payload);
  });
});
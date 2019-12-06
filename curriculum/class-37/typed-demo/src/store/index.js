import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userReducer from './user/user-reducer';
import messageReducer from './messages/message-reducer';

const reducers = combineReducers({
  user: userReducer,
  messages: messageReducer,
  form: formReducer,
});

const store = () => createStore(reducers);

export default store;
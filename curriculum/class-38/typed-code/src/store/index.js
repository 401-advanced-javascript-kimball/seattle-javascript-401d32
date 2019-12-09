import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
import thunk from './middleware/thunk';

const reducers = combineReducers({
  data: reducer,
})

const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;

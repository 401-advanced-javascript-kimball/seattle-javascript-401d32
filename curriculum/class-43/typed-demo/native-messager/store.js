import { createStore, combineReducers, applyMiddleware } from 'redux';
import io from 'socket.io-client';
import thunk from 'redux-thunk';

// All our applications data actions
export const actions = {
  subscribeToMessages: () => (dispatch) => {
    const socket = io('https://codefellows-message-server.herokuapp.com');
    socket.on('MESSAGE', (message) => {
      dispatch(actions.addMessage(message));
    });
    dispatch(actions.connect(socket));
  },
  fetchMessages: () => (dispatch) => {
    return fetch('https://codefellows-message-server.herokuapp.com/api/messages')
      .then(response => response.json())
      .then(data => dispatch(actions.setMessages(data)));
  },
  addMessage: (message) => {
    return {
      type: 'ADD_MESSAGE',
      payload: message,
    }
  },
  setMessages: (messages) => {
    return {
      type: 'SET_MESSAGES',
      payload: messages,
    }
  },
  connect: (socket) => {
    return {
      type: 'CONNECT',
      payload: socket,
    }
  }
}


// All our applications initial state reducers
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.payload];
    case 'SET_MESSAGES':
      return action.payload;
    default:
      return state;
  }
}

const socketReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CONNECT':
      return action.payload;
    case 'DISCONNECT':
      return {};
    default:
      return state;
  }
}

const reducers = combineReducers({
  messages: messageReducer,
  socket: socketReducer,
})

export default () => createStore(reducers, applyMiddleware(thunk));

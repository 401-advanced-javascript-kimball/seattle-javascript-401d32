# Week 9 Project

## React Native UI with Remote API access

This is an UNGRADED pair programming assignment. Please take the next hour to complete as much of the following as you can:

- Create a React Native interface that can connect to a remote API, and fetch and publish messages. It should use redux to manage state and redux thunk to manage async actions.

- Your applcation should connect to the following API URL: `https://codefellows-message-server.herokuapp.com`.
- Create a Redux store the uses the following reducers to set Global state:
  - messageReducer: stores an array of messages.
    - []
  - socketReducer: stores information about the connected web socket for your message app
    - {} 
- Your app should have actions for handling the following operations:
  - Adding a single message to your existing store messages.
    - This should emit a socket event `POST_MESSAGE` to the remote API Socket.io server.
  - Setting your messages using an array of messages.
  - Subscribing to socket events.
    - This needs to connect to the remote server using `socket.io-client`.
    - Connection needs to be made at `https://codefellows-message-server.herokuapp.com`
  - Fetching all current messages at API endpoint:
    - GET `https://codefellows-messages-server.herokuapp.com/api/messages`
- Create a `Messages` component that can connect to your Redux store and do the following things:
  - Uses a redux action to suscribe to events when the component mounts.
  - Grabs messages from Redux state.
     - Messages should be displayed as a list.
  - Uses a form and input handlers to emit an addMessage event from our redux actions.

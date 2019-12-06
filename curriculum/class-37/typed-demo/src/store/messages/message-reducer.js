import uuid from 'uuid/v4';

const initialState = [{
  id: uuid(),
  text: 'Hey there class!!',
  createdAt: new Date(),
  userId: uuid(),
}];

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return action.payload
    case "POST":
      return [...state, action.payload]
    case "PUT":
    case "DELETE":
    default:
      return state
  }
}
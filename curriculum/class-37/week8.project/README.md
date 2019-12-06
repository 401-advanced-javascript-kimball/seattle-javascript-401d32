# Week 8 Project

## Building a Chat UI

> This is an UNGRADED pair programming assignment. Please take the next 50 minutes to complete the following:

Build a Web interface in React using Redux for state management, that can perform the following:

- Contains an global app state using Redux and React-Redux.  The app state should contain the following information:
  - user: an object that stores a string of username and a string of userId.
  - messages: an array of objects, each object will need to have the following properties:

    - id: string,
    - text: string
    - createdAt: date string,
    - userd: string,
- Contains a login form that can add user info to the user object in app state.
- Displays a list of messages.
  - Each Message has the ability to be editted and deleted.
- Contains forms for both editting and posting a new message.
- Has redux actions for `POST` / `GET` / `PUT` / `DELETE` for the messages array global state object.
- Has redux actions for `LOGIN` and `LOGOUT` for the user object in global app state.
- All components must be functional and should use hooks for any React component functionality!

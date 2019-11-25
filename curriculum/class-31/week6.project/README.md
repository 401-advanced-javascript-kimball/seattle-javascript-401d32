# Week 6 Project

## Full Stack Chat

> This is an UNGRADED pair programming assignment, please spend the next hour completing the following TODOs.

Today we are working with a provided backend server that has REST API and Web Socket features built-in with Express and Socket.io. Please pull down this project directory and make sure you can start the server by running `$ node app.js` in your terminal.

We will be focused on creating React Components that can interface with the provided server.  Please work on the following:
- Create a Component called `Auth` that can perform these features:
    - has a form that will let a user both `login` with an existing username and password and `register` a new username and password from a local backend server.
    - Conditionally render `props.children`, depending on whether login credentials are present.
    - Has a class method called `logout` that removes user details.
- Create a component called `Messages` that will be rendered as the Auth components `props.children`, that can perform these features:
    - Fetches messages from a local backend server when the component mounts and displays them to the user.
    - Can POST a new `Message` using a form.
    - Connects to open `socket.io` connection from a local backend server.
        - Listens for a `MESSAGE_POST` event from the backend and adds them to the displayed messages. 
- Styling with SASS!
    - Style your components with whatever Styling specs make you happy :)
    
 > Feel free to modify any functionality in the `backend` directory to better suit your features in your react components.

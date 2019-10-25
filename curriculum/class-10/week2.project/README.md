## Week2 
> The following is an UNGRADED pair programming assignment.  Please take the next 45 minutes to complete as much of the following tasks.

This project will have you creating a small `express` server that maintains a linked list.  Your linked list will be used to store words in a sentence and print them out in a string. 

1) Create a new file called `server.js` and instantiate an express application.  The express application will need to the following functionality:
    - Your server will need 4 routes
        - GET `/sentence`
            - This route will print our the current values of the linked list in a string.
        - POST `/sentence`
            - This route will add a new word at the end of your linked list and return the list as a string.
        - PUT `/sentence/:word`
            - This route will update a node in the linked list, and then return the list as a string.
        - DELETE `/senctence/:word`
            - This route will remove a node from the linked list, and then return the list as a string.
    - Add methods to the provided `linkedList` class to complete the functionality for the above routes.  
 
2) Once this is finished, create a middleware called `cache.js`, that can persist your linked list values to an array in Mongo:
    - This middleware should be used on all your routes.
    - This middleware uses a schema called `sentence` and stores a property called words of type array, which will include all the words in your senctence.
    - This middleware will perform am initial query when each route is hit, and create a completed linked list if a sentence exists.
    - Depending on which action is performed (GET, POST, PUT, DELETE).  The sentence.words may need to be modified.

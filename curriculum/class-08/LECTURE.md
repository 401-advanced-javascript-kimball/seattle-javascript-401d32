# Class 08

## Express Routing and Param middleware

- previous labs used one file to contain all of our server functionality
  - Small modulrization with the routes, but now we want to define all of our rourting in a seperate file
  - Welcone the express.Router()!!!

## New middleware
- Cors
  - www.myawesomesite.com ---> api.superradservice.com = different origin
  - cors lets is grab resources that are hosted at a different origin.
- Morgan
  - Allows better logging across our API.
  - METHOD : ROUTE : RESPONSE_SIZE : RESPONSE_TIME

## Seperation of Concerns
  - Routing files should only be concerned with routing logic:
    - Grabbing data off the request;
    - Calling data persistent functions from other modules.
  - Data manipulation should be completed by Model controllers:
    - Performing operations on Persistent storage.
    - handling data specific methods.

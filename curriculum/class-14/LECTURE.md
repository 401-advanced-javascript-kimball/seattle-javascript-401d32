# Class 14

## Auth / Auth

### What we know so far

> Authentication: As a user, 'Who are you',

- Basic (String based) Auth:
  - Signup: Give us information / credentials -> take those credentials and Create a user from those credentials, and send back a token.
  - Signin: encoded usename/email  plus their password ->
    1) Decode their credentials
    2) Query the DB
    3) If a user is found we compare the password, with their encypted password. 
    4) Send them a token
  - Oauth: Using a third party to handle authentication (Who the user is).
    1) User says: Hey I want to use this service, but I need to give them some credentials, will you do that for me google/linked/github
    2) User gives Auth service their credentials
    3) Auth service sends an Authorization code to the resource server.
    4) Ping the auth service back, asking for a token
    5) AUth service gives our token -> Resource server requests user info with token.
        1) Resource server requests the users information with the token.
- Bearer (token) Authentication:
  - User makes a request for resources using a token
  - If Token checks out, we send them their requested resrouces.

### Authorization

> Do you have persmission?

- Global authorization standard
  - Maybe we don't want all of users to fdo everything.
  - List of Roles
  - List of Capabilities
    - What does this mean for our backend?
      - Read, write, update, and delete.
    - What does this mean for the frontend?
      - Conditionally render items in our forms / buttons / menus
  - Token based, what can we encode in our token?
    - Enciding roles into our token data
    - And mapping those roles to a list capabilites.
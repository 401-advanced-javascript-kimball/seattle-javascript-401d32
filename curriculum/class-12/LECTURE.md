# Class 12

## Oauth

Auth as a service

- Oauth is a standard:
  1) You have to create an "app" on the Oauth providers system.
  2) Redirect URI - URI to your own service.
  3) Client ID - a handshake credential that identifies your application as one that is authorized to use the auth providers Oauth.
  4) Client Secret - server side crednetial that reeeeally makes sure your application is who YOU say you are.
  5) Scopes - what information, does your app need from the auth service.


- 4 Roles
  - **Client**: the front end that attempts to make use of user info.
  - **Authorization Server**: This is the Oauth services server.
    - urls:
      - 1 url for sending a request for GRANT CODE.
      - 2 url for sending requests for Auth Token.
      - 3 possible another for making a request for user info.
  - **Resouces Server**: This is applications server that has protected resources.
  - **The User**: This is the owner of both The auth servers account info, and the owner of the resource servers info.
    - The person who wants access to something.
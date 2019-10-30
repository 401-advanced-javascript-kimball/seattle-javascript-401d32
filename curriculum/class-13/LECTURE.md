# Class 13

## Bearer Authentication
> Basic authenticaion : string based
> Bearer authentication : token based


- String based authentication receives a string, and our system has to decode the string.
- Token based authentication receices a token, and our system needs to decode the token.

1) Our auth process begins with signup and signin: This is basic -> returns a token.
2) Once our user has a token, we need to verify the token and pull out any user data.
   1) Token will contain and id ties to the user, as well as any info required for **Authorization**

### Json Web Token
 - A web standard that encodes json into a string.
 - I protects data passed between 2 parties.
 - Takes a private and/or public key, and uses this as a way to decode your information.
 - NO persisting of token data, only user info hidden behind an encoding.

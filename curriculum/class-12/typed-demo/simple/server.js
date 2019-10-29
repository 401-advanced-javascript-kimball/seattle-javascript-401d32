'use strict ';

const express = require('express');
const superagent = require('superagent');

const app = express();

app.use(express.static('./public'));
app.use(express.json());

const port = 3000;

const googleTokenServerUrl = 'https://www.googleapis.com/oauth2/v4/token';
const googlePlusAPI = 'https://www.googleapis.com/oauth2/v3/userinfo';
const GOOGLE_CLIENT_ID = '230399096814-p6vjp7hrd96lglvhibk1t58ae7ntnqrv.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'IBysZ0NHA6OyTy-FugMEBpJi';
const API_URL = 'http://localhost:3000/oauth';

app.get('/oauth', authorize);

function authorize(req, res) {

  let code = req.query.code;
  console.log(req.query.code);
  console.log('1) code received: ', code);

  return superagent.post(googleTokenServerUrl)
    .type('form')
    .send({
      code: code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: API_URL,
      grant_type: 'authorization_code',
    })
    .then(response => {
      let access_token = response.body.access_token;
      console.log('(2) Access token received, ', access_token);
      return access_token;
    })
    .then(token => {
      return superagent.post(googlePlusAPI)
        .set('Authorization', `Bearer ${token}`)
    })
    .then(response => {
      let user = response.body;
      console.log(`3) here is our user:`, user);
      res.status(200).json(user);
    })
    .catch(e => res.send(e));
}

app.listen(port, () => {
  console.log('Oauth server running');
});

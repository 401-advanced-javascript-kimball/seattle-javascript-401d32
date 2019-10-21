'use strict';

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

router.render = (req, res) => {
  res.jsonp({
    results: res.locals.data,
  })
}

server.use(router);
server.use(middlewares);
server.listen(3000, () => {
  console.log('Json-server awaiting requests');
});
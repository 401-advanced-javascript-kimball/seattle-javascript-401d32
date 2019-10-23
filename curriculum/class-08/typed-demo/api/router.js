'use strict';

const express = require('express');

const router = express.Router();

router.get('/posts/:postId/:banana', (req, res) => {
  const { postId, banana } = req.params;
  res.send(`you have requested post number ${postId}, and your banana is ${banana}`);
});

router.get('/posts', (req, res) => {
  const { postid } = req.query;
  res.send(`Your search query is ${postid}`);
})

module.exports = router;
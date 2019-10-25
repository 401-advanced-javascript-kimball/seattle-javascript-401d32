'use strict';

const express = require('express');
const LinkedList = require('./lib/linkedList');

const app = express();
const sentenceList = new LinkedList();

app.use(express.json());

app.get('/sentence', async (req, res) => {
  const sentence = sentenceList.toString();
  res.send(sentence);
});

app.post('/sentence', async (req, res) => {
  const { word } = req.body;
  const sentence = await sentenceList.append(word);
  res.send(sentence);
});

app.listen(3000, () => console.log('Sentence track up : 3000'));
'use strict';

const mongoose = require('mongoose');
const Messages = require('./models/messages-model');

const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

mongoose.connect(MONGOOSE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology:true,
});

let messages = new Messages();

messages.create({text: 'Here is my sweet message'})
  .then(message => console.log(message));

messages.get()
  .then(allMessages => console.log(allMessages));


// Disconnect from Mongo
mongoose.disconnect();

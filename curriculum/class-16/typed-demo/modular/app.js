'use strict';

const events = require('./events');

// logging activity to the console
const logger = require('./logger');

// handling our data cache
require('./cache');


events.emit('save', { id: 1, content: 'Jacob is super rad' });
events.emit('delete', { id: 1, content: 'Jacob is super rad' });
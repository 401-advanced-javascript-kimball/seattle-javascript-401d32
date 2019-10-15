
// WHat is this?
// console.log(this, global);

const Jacob = { name: 'Jacob ' };

function log(greeting) {
  console.log(`${this.name} says: hello ${greeting}`);
}

// call, bind, apply
// these methods allow us to define this;

// log.call(Jacob, 'class', 'good bye');
// log.apply(Jacob, ['class', 'bye', 'something']);

const contextualLog = log.bind(Jacob);
contextualLog('Class');
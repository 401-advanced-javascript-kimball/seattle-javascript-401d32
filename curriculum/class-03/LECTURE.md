# Class 03

## JS Event Loop

- Our Runtime is the v8 engine.
    - This provides our js with an ecosystem in which our code can execute.
    - Built in is the JS Event Loop.
        - Call Stack.
        - Callback Queue.
    - If one function takes a long time to finish, and another function depends
        on what that function returns?  Whaat Do?
      - V8 Yo I got you fam: Async!!!!
      
    - Promises, Callbacks, async / await.  
    
## Callbacks
- Design pattern for Async.   

```js

// this function will be used to offload functionality
function callback(data)  {
  console.log('callback!!!', data);
}

function DoesABunch(cb) {
  const data = fetch('www.google.com')
  cb(data);


DoesABunch(callback);

```

## Promises

- A special type of Function, created with a constructor;

```js
const longTask = (data) => new Promise((resolve, reject) => {
  // specify condtions that satisfy pass / fail
  if (!data) {
    reject('Uh ohhhh');
  } else {
    resolve(data);
  }
});

longTask(true)
    .then(data => console.log(data))
    .catch(e => console.warn(e));
```

## Async / Await

- Uses a special syntax for forcing async considerations



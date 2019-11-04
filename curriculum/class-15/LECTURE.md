# Class 15

## Recursion and Project Prep

- What is recursion?
  - A function that calls itself???

```js
// not recursion, but recurion like
while(current.next) {
  current = current.next
}
```

- let's say we want to add number:

```js
function add(a, b) {

 // BASE case, an answer that is know and we can stop of function
 if (b === 1) {
   return a + b;
 }

 return add(a + 1, b - 1);
}
```

- what about traversing a linked list

```js
function traverse(node) {
  console.log(node);

  /// BASE case: our answer we are accounting for.
  if (!node.next) {
    return node.value;
  }

  traverse(node.next);
}
```

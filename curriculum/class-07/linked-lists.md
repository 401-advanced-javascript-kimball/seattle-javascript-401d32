# Linked Lists

## What are Linked Lists
 - A linear chain of Nodes
 - Usually just contains a property called `head`
   - `head` is a Node

## What is a Node
 - A structure containing one `values` and a reference to another node, unsually `next`


```js

// Our Node class for a linked list
class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Our LL class is es6 JS
class LinkedList {
  constructor() {
    this.head = null;
  }

  // traversing a linked list
  traverse() {
    let current = this.head;
    
    while(current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.head = new Node(1);
ll.head.next = new Node(2);


```

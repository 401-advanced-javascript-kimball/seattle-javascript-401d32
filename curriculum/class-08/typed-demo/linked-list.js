'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    // create a new node
    let node = new Node(value);

    // set a variable for current node
    let current;

    // An initial linked list has a null head,
    // this adds our new node to this.head.
    if (!this.head) {
      this.head = node;
      this.length++;
      return;
    }

    // If head is not null, than we have at least one node;
    // set current to the head;
    // This will be temporary, only acting as a pointer.
    current = this.head;

    // start a while loop
    while (current.next) {
      // In here we can definetly say there is an existing node
      current = current.next;// transporting us to the end of our ll:
    }
    // Here we want to set current to our new node
    current.next = node;
    this.length++;
  }

  insertBefore(value, newValue) {
    const node = new Node(newValue);

    // track previous
    let current = this.head;
    let previous = this.head;

    // Catch when head is our target value
    if (current.value === value) {
      node.next = current;
      this.head = node;
      this.length++;
      return;
    }

    current = current.next;

    // Lists can only go forward.
    while (current !== null) {
      if (current.value === value) {
        previous.next = node;
        node.next = current;
        this.length++;
        break;
      }
      previous = previous.next;
      current = current.next;
    }
  }

  insert(value, newValue) {

    // always need new node value
    const node = new Node(newValue);


    // if head is our target
    if (this.head.value === value) {
      node.next = this.head;
      this.head = node;
      this.length++;
      return;
    }

    let current = this.head;

    // start traversal
    while (current.next) {
      // when do we make our swap -> attaching the rest of our list to new node;
      if (current.next.value === value) {
        // attaching the rest of the list to our new node when the next value is our target.
        node.next = current.next;
        // making the rest of the list from our current list equal our newly modofied node;
        current.next = node;
        this.length++;
        return;
      }

      current = current.next;
    }
  }
}


const ll = new LinkedList();

ll.append(1);
ll.insert(1, 0);
ll.insert(1, 1.5);
console.log(JSON.stringify(ll));
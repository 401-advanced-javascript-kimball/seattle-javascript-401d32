/**
 * Traverses a Linked List node Recursively
 */

function traverse(node) {
  console.log(node);

  // BASE case, the case in which the answer is known, and thus expressed without recursion.
  if (!node.next) {
    return;
  }

  // our recursive case.  A tail recursion implementation since 
  traverse(node.next);
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

const test = new LinkedList();
test.head = new Node(1);
test.head.next = new Node(2);
test.head.next.next = new Node(3);

traverse(test.head);

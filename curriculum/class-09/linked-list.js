/**
 * kthFromEnd
 * 
 * this takes in a position from the end of the list.
 * and returns the value of the node from that position.
 * 
 * 
 * sample List:
 * head -> [1] -> [3] -> [7] -|
 * input: 1
 * output: 3
 * 
 * input: 0
 * output: 7
 * 
 * input: 3
 * output: Exception
 * */


/**
 * Pseudocode:
 * 
 *   1)Find the length of our linked list.
 *     1.5) Make sure position passed into method is less than the length of our LL.
 *   2) Use the length to find a node value at the given length - the position parameter.
 *   3) Returning the node value.
 */


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

  /**
   * 
   */

  kthFromEnd(positionFromEnd) {
    let current = this.head;
    let length = 0;

    // traversing our list and getting our length.
    while (current) {
      length++;
      current = current.next;
    }

    // compare length, to postionFromEnd
    if (positionFromEnd >= length) {
      return 'Exception found: postion is tooooo big'
    }

    current = this.head;
    for (let i = 1; i < length - positionFromEnd; i++) {
      current = current.next;
    }

    return current.value;
  }
}

const ll = new LinkedList();

ll.head = new Node(1);
ll.head.next = new Node(3);
ll.head.next.next = new Node(7);

console.log(ll.kthFromEnd(3));

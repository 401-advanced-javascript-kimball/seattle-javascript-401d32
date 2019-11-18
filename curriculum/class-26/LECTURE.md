# Class 26!!

## Overview:
- Introduction to component based UI
- Start focusing more DSA.

## Code Challenge:
> Write a function that takes in a linked list, and returns a new Linked List with its nodes reversed:
  -  1) while loop!
     -   If you've completed this challenge previously: LET THEM KNOW
     -   Allow them to give you another challemnge if they want.
  -  1.1) Ask about uzing built in methods, ask if they want to built methods from scratch off of a class.
     -  Ask lots of clarifying questions.
        -  What can I assume about Linked Lists?
        -  What can I assume about Nodes.
     -  Interviewers will be vague to see you ability to ask good questions.
  -  1.2) Talk about the characteristics of a Node Class.
  -  2) Identify proper inputs and outputs.
     -  We really like pictures.
     -  Drawing illustrations of data structures and using callouts to operations.
  -  3) Algorithm
     -  I like enumerated lists.
     -  Talk about efficiency ( big 0 notation ).
     -  What are all the steps that your solution will use:
        -  First I will traverse the list?
        -  Than I will define my varibales
        -  If some condiftional exists I will perfrom the following operations.
     - Step through your alogrithm with your sample input / output from above.
  -  4) Pseudocode
     -  code like statements that are very explicit and code easily be turned into code.
  - 5) Produce Syntactically correct code.
     - Edge cases and how might you test this.
  - 5.9) Pivoting
     - Ask many questions and if possible a hint.

```js
class LinkedList {
  constructor () {
    this.head = null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

type Node
  -> value
  -> next

type Tree
  -> head

/** ALGORITHM
 * Step to getting from input to ouput
 * 
 * Declare some variables for pointers to nodes
 *  
 * Traverse our list
 * 
 * Reassigning pointers for each iteration of our while loop
 * 
 * optional:  Return new linked list
 * 
 * */

/** Psuedocode
 * 
 * var prev 
 * var next
 * var current = linkedList.head
 * 
 * while current !== null
 *    next = current.next
 *    current.next = prev
 * 
 *    prev = current
 *    current = next
 * */

  function reverse (list) {

    let next;
    let prev;
    let current = Object.assign({}, list.head); // Ensuring a copy is made instead of a reference. 

  }

```

## Component Based UI
- Previously used template (HTML) use a combination server side and client code to render different parts of that template.
- Component based UI takes a chunk of functionlity and defines such that it can used anywhere in a project no matter what other technologies or processees occur around it.
- Combining concerns into a dicrete package.
- React is our component library / framework, which creates standalone UI components.
- Our UIs need 4 things to work properly:
  - state? What data does our ui need
  - behavior? How are users interacting with the UI
  - events? What browser / API specific things are occuring in our UI.
  - template?  What layout does our UI use to display content.

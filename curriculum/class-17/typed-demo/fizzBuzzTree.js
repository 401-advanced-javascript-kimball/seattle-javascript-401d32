'use strict';

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

function fizzBuzzTree(tree) {
  // what if the root is null?
  if (tree.root === null) {
    return;
  }

  traverseWithBuzz(tree.root);

  return tree;
}

// recursive function
function traverseWithBuzz(node) {
  // BASE case
  if (node === null) {
    return;
  }

  if (node.value % 3 === 0 && node.value % 5 === 0) {
    node.value = 'fizzbuzz';
  } else if (node.value % 3 === 0) {
    node.value = 'fizz';
  } else if (node.value % 5 === 0) {
    node.value = 'buzz';
  }

  traverseWithBuzz(node.left);
  traverseWithBuzz(node.right);
}

const tree = new BinaryTree();

tree.root = new Node(3);
tree.root.right = new Node(5);
tree.root.left = new Node(15);
tree.root.left.left = new Node(5);

console.log(JSON.stringify(fizzBuzzTree(tree)));
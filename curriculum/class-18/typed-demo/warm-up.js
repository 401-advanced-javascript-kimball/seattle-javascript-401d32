'use strict';

/**
 * A function that take in a tree, and returns the sum of it's nodes
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

function treeSum(tree) {
//  let sum = 0;
if (tree.root === null) {
  return;
}

return _rSum(tree.root);

//  function _rSum(node) {
//    if (node) {
//      sum += node.value;
//      _rSum(node.left);
//      _rSum(node.right);
//    }
//  }
//  _rSum(tree.root);

//  return sum;
}

// this function alwasy returns a number;
function _rSum(node) {
  if (node === null) {
    return 0;
  }

  return node.value + _rSum(node.left) + _rSum(node.right);
}

const tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(3);
tree.root.right =  new Node(5);


console.log(treeSum(tree));













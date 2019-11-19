
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class SearchTree {
  constructor() {
    this.root = null;
  }

  insert(node, value) {
    if (node == null) {
      return new Node(value);
    } else {

      let temp;

      if (value <= node.value) {
        temp = this.insert(node.left, value);
        node.left = temp;
      } else {
        temp = this.insert(node.right, value);
        node.right = temp;
      }

      return node;
    }
  }
}




function findNextLargestNode(root, targetNode) {
  if (targetNode.right !== null) {
    return findMin(targetNode.right);
  }

  let nextLargestNode = null;
  let current = root;

  while (current) {

    if (current.value > targetNode.value) {
      nextLargestNode = current;
      current = current.left;
    } else if (current.value < targetNode.value) {
      current = current.right;
    } else {
      break;
    }
  }

  return nextLargestNode;
}

function findMin(node) {
  let current = node

  while (current.left) {
    current = current.left;
  }

  return current;
}

const tree = new SearchTree();

tree.root = new Node(20);

tree.insert(tree.root, 8);
tree.insert(tree.root, 22);
tree.insert(tree.root, 4);
tree.insert(tree.root, 12);
tree.insert(tree.root, 10);
tree.insert(tree.root, 14);

// console.log(JSON.stringify(tree));
const node = findNextLargestNode(tree.root, tree.root.left);
console.log(node);
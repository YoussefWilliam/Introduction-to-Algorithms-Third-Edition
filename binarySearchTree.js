/**
 *              9
 *      4               20
 *   1       6       15      170
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left ? traverse(node.left) : null;
  tree.right = node.right ? traverse(node.right) : null;
  return tree;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // return tree with the newly added node
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value > value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }
        if (currentNode.value < value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  // return true if value is there
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return true;
      }
    }
    return false;
  }
  // return tree without the given node
  remove(value) {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    let prevNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        prevNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        prevNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // Check if it is a leaf node
        if (!currentNode.left && !currentNode.right) {
          if (prevNode.value > currentNode.value) {
            prevNode.left = null;
          } else {
            prevNode.right = null;
          }
          return this;
        }
      }

      // Check if it only has one child
      if (
        (!currentNode.left && currentNode.right) ||
        (currentNode.left && !currentNode.right)
      ) {
        const child = currentNode.left || currentNode.right;
        if (prevNode.value > currentNode.value) {
          prevNode.left = child;
        } else {
          prevNode.right = child;
        }
        return this;
      }
      if (currentNode.left && currentNode.right) {
        const successor = currentNode.right;
        if (prevNode.value > currentNode.value) {
          prevValue.left = successor;
          successor.right = currentNode.left;
        } else {
          prevNode.right = successor;
          successor.left = currentNode.left;
        }
        return this;
      }
    }
  }
}

const myTree = new BinarySearchTree();
myTree.insert(9);
myTree.insert(4);
myTree.insert(20);
myTree.insert(1);
myTree.insert(6);
myTree.insert(15);
myTree.insert(170);

console.log(JSON.stringify(traverse(myTree.root)));

console.log(myTree.lookup(9));
console.log(myTree.lookup(4));

myTree.remove(20);
console.log(myTree.lookup(20));

console.log(JSON.stringify(traverse(myTree.root)));

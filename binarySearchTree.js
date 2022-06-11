/**
 *              9
 *      4               20
 *   1       6       15      170
 *
 * Breadth First search => [9, 4, 20, 1, 6, 15, 170]
 * Depth First search has 3 types:
 *    1. InOrder   ->  [1, 4, 6, 9, 15, 20, 170] => Ordered binary list
 *    2. PreOrder  ->  [9, 4, 1, 6, 20, 15, 170] => Normal depth first search
 *    3. PostOrder ->  [1, 6, 4, 15, 170, 20, 9] => From children to parent order.
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

  // return a list of traversing iteratively the tree in breadth first search.
  breadthFirstSearch() {
    let currentNode = this.root;
    let result = [];
    let memeoryQueue = [];
    memeoryQueue.push(currentNode);
    while (memeoryQueue.length) {
      currentNode = memeoryQueue.shift();
      result.push(currentNode.value);
      if (currentNode.left) {
        memeoryQueue.push(currentNode.left);
      }
      if (currentNode.right) {
        memeoryQueue.push(currentNode.right);
      }
    }
    return result;
  }

  // return a list of traversing recursively the tree in breadth first search.
  recursiveBreadthFirstSearch(memoryQueue, result) {
    if (memoryQueue.length === 0) {
      return result;
    }
    let currentNode = memoryQueue.shift();
    result.push(currentNode.value);
    if (currentNode.left) {
      memoryQueue.push(currentNode.left);
    }
    if (currentNode.right) {
      memoryQueue.push(currentNode.right);
    }

    return this.recursiveBreadthFirstSearch(memoryQueue, result);
  }

  // return a list of traversing recursively the tree in depth first search using the in-order technique
  depthFirstSearchInOrder() {
    return traverseInOrder(this.root, []);
  }

  // return a list of traversing recursively the tree in depth first search using the pre-order technique
  depthFirstSearchPreOrder() {
    return traversePreOrder(this.root, []);
  }

  // return a list of traversing recursively the tree in depth first search using the post-order technique
  depthFirstSearchPostOrder() {
    return traversePostOrder(this.root, []);
  }
}

function traverseInOrder(currentNode, result) {
  if (currentNode.left) {
    traverseInOrder(currentNode.left, result);
  }
  result.push(currentNode.value);
  if (currentNode.right) {
    traverseInOrder(currentNode.right, result);
  }
  return result;
}
function traversePreOrder(currentNode, result) {
  result.push(currentNode.value);
  if (currentNode.left) {
    traversePreOrder(currentNode.left, result);
  }
  if (currentNode.right) {
    traversePreOrder(currentNode.right, result);
  }
  return result;
}
function traversePostOrder(currentNode, result) {
  if (currentNode.left) {
    traversePostOrder(currentNode.left, result);
  }

  if (currentNode.right) {
    traversePostOrder(currentNode.right, result);
  }
  result.push(currentNode.value);
  return result;
}

const myTree = new BinarySearchTree();
myTree.insert(9);
myTree.insert(4);
myTree.insert(20);
myTree.insert(1);
myTree.insert(6);
myTree.insert(15);
myTree.insert(170);

// console.log(JSON.stringify(traverse(myTree.root)));
console.log(myTree.breadthFirstSearch());
console.log(myTree.recursiveBreadthFirstSearch([myTree.root], []));
console.log(myTree.depthFirstSearchInOrder());
console.log(myTree.depthFirstSearchPostOrder());
console.log(myTree.depthFirstSearchPreOrder());

console.log(myTree.lookup(9));
console.log(myTree.lookup(4));

myTree.remove(20);
console.log(myTree.lookup(20));

console.log(JSON.stringify(traverse(myTree.root)));

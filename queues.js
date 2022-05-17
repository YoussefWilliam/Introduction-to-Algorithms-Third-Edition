class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length !== 0) {
      this.first = this.first.next;
    }
    this.length--;
    return this;
  }
  isEmpty() {
    return this.length === 0;
  }
  printQueue() {
    let currentNode = this.first;
    let array = [];
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}
const myQueue = new Queue();
myQueue.enqueue("page1");
myQueue.enqueue("page2");
myQueue.enqueue("page3");

console.log("🚀 ", myQueue.printQueue());

myQueue.dequeue();

console.log("🚀 ", myQueue.printQueue());

myQueue.dequeue();

console.log("🚀 ", myQueue.printQueue());

myQueue.dequeue();

console.log("🚀 ", myQueue.printQueue());

/**
 * page 1
 * page 2
 * page 3
 * page1 -> page2 -> page3
 */

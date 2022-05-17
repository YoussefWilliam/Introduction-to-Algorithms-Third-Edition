class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.buttom = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.buttom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }
  peek() {
    return this.top;
  }
  pop() {
    if (this.top !== null || !this.isEmpty()) {
      this.top = this.top.next;
      this.length--;
    }

    return this;
  }
  isEmpty() {
    return this.length === 0;
  }
  printStack() {
    let resultArray = [];
    let currentNode = this.top;
    while (currentNode !== null) {
      resultArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return resultArray;
  }
}

const myStack = new Stack();
myStack.push("google.com");
myStack.push("youtube.com");
myStack.push("discord.com");

myStack.pop();
myStack.pop();

console.log("🚀 ~", myStack);

/**
 * 1. google.com
 * 2. youtube.com
 * 3. discord.com
 *  => discord.com -> youtube.com -> google.com
 */

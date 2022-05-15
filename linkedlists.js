// 10 -> 5 -> 16

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length = this.length + 1;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length = this.length + 1;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    let currentNode = this.head;
    let i = 0;
    while (i < index && currentNode !== null) {
      currentNode = currentNode.next;
      i++;
    }
    const newNode = new Node(value);
    const theVeryNextNode = currentNode.next;
    currentNode.next = newNode;
    newNode.next = theVeryNextNode;
    this.length++;
    return this;
  }
  delete(index) {
    let currentNode = this.head;
    let i = 0;
    while (i < index - 1 && currentNode !== null) {
      currentNode = currentNode.next;
      i++;
    }
    currentNode.next = currentNode.next.next;
    this.length--;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.insert(1, 99);
myLinkedList.insert(3, 77);
console.log(
  "🚀 ~ file: linkedlists.js ~ line 15 ~ myLinkedList",
  myLinkedList.printList()
);
myLinkedList.delete(1);
console.log(
  "🚀 ~ file: linkedlists.js ~ line 15 ~ myLinkedList",
  myLinkedList.printList()
);

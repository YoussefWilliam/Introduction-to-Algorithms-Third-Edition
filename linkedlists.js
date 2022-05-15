// 10 -> 5 -> 16

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newItem = {
      value: value,
      next: null,
    };
    this.tail.next = newItem;
    this.tail = newItem;
    this.length = this.length + 1;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length = this.length + 1;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(7);

console.log("🚀 ~ file: linkedlists.js ~ line 15 ~ myLinkedList", myLinkedList);

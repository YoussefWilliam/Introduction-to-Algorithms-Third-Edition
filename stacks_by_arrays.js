class Stack {
  constructor() {
    this.stackArray = [];
  }
  push(value) {
    this.stackArray.push(value);
    return this;
  }
  pop() {
    this.stackArray.pop();
    return this;
  }
  peek() {
    return this.stackArray[this.stackArray.length - 1];
  }
  isEmpty() {
    return this.stackArray.length === 0;
  }
  printStack() {
    return this.stackArray;
  }
}
const myStack = new Stack();
myStack.push("google.com");
myStack.push("youtube.com");
myStack.push("discord.com");
console.log("🚀", myStack.peek());

myStack.pop();
console.log("🚀", myStack);
myStack.pop();
myStack.pop();

console.log(myStack.isEmpty());

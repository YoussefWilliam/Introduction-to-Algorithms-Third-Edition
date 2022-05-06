class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  // delete last item, decrement the length
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length = this.length - 1;
    return lastItem;
  }

  // add item to the end of array, increment the length
  push(item) {
    this.data[this.length] = item;
    this.length = this.length + 1;
    return this.data;
  }

  // [1,2,3,4] 3 => [1,2,4] return new array with decremented length
  delete(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
      this.pop();
    }
  }
}

const myArray = new MyArray();

myArray.push("item 1");
myArray.push("item 2");

myArray.delete(0);

console.log(myArray);

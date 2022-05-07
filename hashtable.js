class Hashtable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += (key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let arrayOfValues = [key, value];
    this.data.push(arrayOfValues);
    return this.data;
  }

  get(key) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i][0] === key) {
        return this.data[i][1];
      }
    }
  }

  keys() {
    let arrayOfKeys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        arrayOfKeys.push(this.data[i][0]);
      }
    }
    return arrayOfKeys;
    console.log(this.data);
  }
}
const myHashTable = new Hashtable(50);
myHashTable.set("name", "joe");
myHashTable.set("age", 12);
myHashTable.set("alive", true);
console.log("🚀 ~ file: hashtable.js ~ line 37 ~ myHashTable", myHashTable);

console.log(myHashTable.get("alive"));

console.log(myHashTable.keys());

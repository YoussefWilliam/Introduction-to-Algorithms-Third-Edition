// Gived an array, return the first repeting character.
// [2,5,1,2,3,5,1,2,4] => 2
// [2,1,1,2,3,5,1,2,4] => 1
// [1,2,3,4,5] => undefined

function reccuringItem(arr) {
  let mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    let myNumber = arr[i];
    if (!mySet.has(myNumber)) {
      mySet.add(myNumber);
    } else {
      return myNumber;
    }
  }
  return undefined;
}

const test_array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const test_array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const test_array3 = [1, 2, 3, 4, 5];

console.log("array 1 => ", reccuringItem(test_array1));
console.log("array 2 => ", reccuringItem(test_array2));
console.log("array 3 => ", reccuringItem(test_array3));

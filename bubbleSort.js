/**
 * Sort this array using bubble sort algorithm
 * [99,44,6,2,1,5,63,87,283,4,0]
 */

function bubbleSort(arr) {
  let numberOfLoops = 0;
  while (numberOfLoops < arr.length) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    numberOfLoops++;
  }
  return arr;
}

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(bubbleSort(arr));

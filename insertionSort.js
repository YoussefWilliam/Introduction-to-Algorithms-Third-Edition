/**
 * In insertion sort, you compare the previous number with the current number.
 * If the current number is smaller than the previous number => you swap.
 * Else => you break
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      let currentNumber = arr[j];
      let previousNumber = arr[j - 1];
      if (currentNumber < previousNumber) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(insertionSort(arr));

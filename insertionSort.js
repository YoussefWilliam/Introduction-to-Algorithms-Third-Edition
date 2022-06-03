/**
 * In this sorting algorithm, we look at the next item and compare it with the prev item.
 * If the current number is smaller than the previous number => you swap.
 * Else => you break
 */

function insertionSort(arr) {
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      let currentNumber = arr[j];
      let previousNumber = arr[j - 1];
      if (currentNumber < previousNumber) {
        let tempNumber = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tempNumber;
      }
    }
  }
  return arr;
}

const arr = [0, 99, 44, 6, 2, 1, 5, 63, 87, 283, 4];
console.log(insertionSort(arr));

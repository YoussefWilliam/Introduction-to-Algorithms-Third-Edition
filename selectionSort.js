/**
 * We sort by looking for the smallest number in the group, swap this number with the first item of the list.
 * We continue till we reach the end of the list.
 * So, use selection sort to sort this array: [99,44,6,2,1,5,63,87,283,4,0]
 */

function selectionSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

const arr = [0, 99, 44, 6, 2, 1, 5, 63, 87, 283, 4];
console.log(selectionSort(arr));

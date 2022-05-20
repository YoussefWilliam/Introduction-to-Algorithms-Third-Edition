/**
 * Given two arrays, use divide-and-conquer approach to merge sort them
 * @param Array
 * @returns {Array}
 *
 * Divide and conquer approach depends on recursion, so we are gonna implement two functions
 * @function mergeSort that is going to divide an array into 2 arrays to check them "divide"
 * @function merge that is goind to handle the two arrays divided from the recursion function and conquer their result
 */

function merge(arr1, arr2) {
  let sortedArray = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      sortedArray.push(arr2.shift());
    }
    if (arr1[0] < arr2[0]) {
      sortedArray.push(arr1.shift());
    }
  }
  //   Handle not equal lengthed arrays
  return [...sortedArray, ...arr1, ...arr2];
}

function mergeSort(array) {
  const half = array.length / 2;
  if (array.length <= 1) {
    return array;
  }
  let arr1 = array.splice(0, half);
  let arr2 = array;
  return merge(mergeSort(arr1), mergeSort(arr2));
}

console.log(mergeSort([3, 41, 52, 26, 38, 57, 9, 49]));

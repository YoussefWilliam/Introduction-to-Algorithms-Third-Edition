// Given two sorted arrays, return a sorted array with items of the 2 arrays
// [0,3,4,31] , [4,6,30] => [0,3,4,4,6,30,31]

function mergeSortedArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

const functionalProgrammingApproach = mergeSortedArrays(arr1, arr2);
console.log(functionalProgrammingApproach);

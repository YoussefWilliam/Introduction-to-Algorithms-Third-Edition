function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      let currentNumber = array[j];
      let previousNumber = array[j - 1];
      if (currentNumber < previousNumber) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return array;
}

const array = [31, 41, 59, 26, 41, 58];
const sortedArray = insertionSort(array);
console.log(sortedArray);

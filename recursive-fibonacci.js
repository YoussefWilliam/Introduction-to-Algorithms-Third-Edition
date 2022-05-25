/**
 * Create two functions that are given a number and they return the febonacci sequence of it
 * First function is iteratively
 * Second function is recursively
 */

function fibonacciIterative(number) {
  let arr = [0, 1];
  for (let i = 2; i < number + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[number];
}

function fibonacciRecursive(number) {
  if (number < 2) {
    return number;
  }
  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

console.log(fibonacciIterative(8));
console.log(fibonacciRecursive(8));

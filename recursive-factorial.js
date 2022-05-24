/**
 * Write two functions the find the factorial of any number
 * First function should be iteratively
 * Second function should be recursively
 */

function findFactorialIteratively(number) {
  let answer = 1;
  while (number > 0) {
    answer = answer * number;
    number--;
  }
  return answer;
}

function findFactorialRecursively(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursively(number - 1);
}

console.log(findFactorialIteratively(5)); // => 120
console.log(findFactorialRecursively(5)); // => 120

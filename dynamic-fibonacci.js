function normalFibonacci(number) {
  if (number < 2) return number;
  return normalFibonacci(number - 1) + normalFibonacci(number - 2);
}

function dynamicFibonacci() {
  let cache = {};
  return function fib(number) {
    if (number in cache) return cache[number];
    else {
      if (number < 2) return number;
      else {
        cache[number] = fib(number - 1) + fib(number - 2);
        return cache[number];
      }
    }
  };
}

function bottomUpFibonacci(number) {
  let answer = [0, 1];
  for (let i = 2; i <= number; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

const dynamicFib = dynamicFibonacci();

console.log(normalFibonacci(20));
console.log(dynamicFib(20));
console.log(bottomUpFibonacci(20));

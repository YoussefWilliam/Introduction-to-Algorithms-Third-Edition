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

const dynamicFib = dynamicFibonacci();

console.log(normalFibonacci(10));
console.log(dynamicFib(10));

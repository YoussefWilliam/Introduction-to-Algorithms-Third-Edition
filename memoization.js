function memoization() {
  let cache = {};
  return function (n) {
    console.log("first time?", n, cache);
    if (n in cache) return cache[n];
    else {
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoize = memoization();
console.log(memoize(80));
console.log(memoize(80));

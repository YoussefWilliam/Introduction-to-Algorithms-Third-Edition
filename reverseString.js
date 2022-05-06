// Create a function reverse that takes an input string and returns a string as well
// Hi my name is youssef
// => fessuof si eman ym iH

// Using advanced functional programming
function reverse(str) {
  return str
    .split(" ")
    .map((item) =>
      item.split(" ").map((item) => item.split("").reverse().join(""))
    )
    .reverse()
    .join(" ");
}

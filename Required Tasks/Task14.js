// Given an array of strings and numbers. Print the number of integers and the number of strings in the array.

let arr = [1, "10", "hi", 2, 3];
let numbers = 0;
let strings = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    numbers++;
  } else if (typeof arr[i] === "string") {
    strings++;
  }
}
console.log(`Numbers: ${numbers}, Strings: ${strings}`);

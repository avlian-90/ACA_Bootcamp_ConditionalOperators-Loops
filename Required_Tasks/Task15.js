// Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of their lengths.

let arr = ["wish", "slightly", "understand", "longer", "unexpected", "heart"];

let strLengths = arr.map((el) => el.length);
let lengthsSum = Math.max(...strLengths) + Math.min(...strLengths);
console.log(lengthsSum);

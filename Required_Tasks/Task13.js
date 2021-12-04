/* Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the
numbers in a separate array. Arrange them such as from the beginning are the odds and from the
ending the evens.*/

let mixedArr = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3, NaN];
let filteredArr = mixedArr.filter((el) => typeof el === "number" && !isNaN(el));
let oddEls = [];
for (let i = 0; i < filteredArr.length; i++) {
  if (filteredArr[i] % 2 !== 0) {
    oddEls.push(filteredArr[i]);
  }
}
// console.log(filteredArr);
// console.log(oddEls);
let evenEls = filteredArr.filter((el) => el % 2 === 0);
// console.log(evenEls);
let newArr = oddEls.concat(evenEls);
console.log(newArr);

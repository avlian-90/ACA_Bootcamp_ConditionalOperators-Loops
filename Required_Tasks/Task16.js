/* Given an array of numbers and a number. Find the index of a first element which is equal to that
number. If there is not such a number, that find the index of the first element which is the closest to it.*/

let arr = [21, -9, 15, 2116, -71, 33];
let num = -71;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    console.log(i);
  }
}

// else statement is missing, can't write.

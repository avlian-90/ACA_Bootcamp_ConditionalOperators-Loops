// Find the sign of product of three numbers without multiplication operator. Display the specified sign.

let numbers = [-14, 5, 0];
let str = numbers.join();
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === "-") {
    count++;
  }
}
if (str.includes(0)) {
  console.log("unsigned");
} else if (count % 2 !== 0) {
  console.log("-");
} else {
  console.log("+");
}

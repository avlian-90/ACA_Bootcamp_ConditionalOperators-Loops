/* Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the
sum, print the quotient, otherwise print the remainder. */

let num = 1233;
let temp = num;
let sum = 0;
let product = 1;
while (num > 0) {
  let digit = num % 10;
  num = (num - digit) / 10;
  sum += digit;
  product *= digit;
}
if (temp === 0) {
  console.log("Cannot calculate.");
} else if (product % sum === 0) {
  console.log(`Quotient is ${product / sum}.`);
} else {
  console.log(`Remainder is ${product % sum}.`);
}

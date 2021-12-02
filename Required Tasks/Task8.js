// Enter a number. Reverse its first and last digits. Print the new number.

let num = 895796;
let lastDigit = num % 10;
let digits = num.toString().length;
let zeros = 10 ** (digits - 1);
let firstDigit = Math.floor(num / zeros);
// console.log(firstDigit);
let restDigits = num - firstDigit * zeros - lastDigit;
// console.log(restDigits);
let newNum = lastDigit * zeros + restDigits + firstDigit;
console.log(newNum);

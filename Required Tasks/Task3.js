/*Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If
the last digit of the inserted number is 0, number remains the same.*/

let num = 367;
if (num % 10 === 0 || Math.floor(num / 10) === 0) {
  console.log(num);
} else {
  let lastDigit = num % 10;
  num = (num - lastDigit) / 10;
  let pow = num.toString().length;
  let newNum = 10 ** pow * lastDigit + num;
  console.log(newNum);
}

// Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.

let num = 401;
let isPrime = true;
for (let i = 2; i < num / 2; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("yes");
} else {
  console.log("no");
}

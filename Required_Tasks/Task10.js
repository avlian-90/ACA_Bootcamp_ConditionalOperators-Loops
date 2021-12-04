// Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak = ak-1 + ak-2)

let fibNumbers = [0, 1, 1];
let n = 10;
for (let i = 3; i < n; i++) {
  fibNumbers.push(fibNumbers[i - 2] + fibNumbers[i - 1]);
}
if (n === 0) {
  console.log(0);
} else {
  console.log(fibNumbers[n - 1]);
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34... The 10th fibonacii numbers isn't 55, as it is written in task, but 34, so output is 34.

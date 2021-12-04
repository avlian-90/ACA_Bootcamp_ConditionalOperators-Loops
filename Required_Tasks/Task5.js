// Given three numbers. Sort them by the ascending order.

let numbers = [45, 26, 78];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > numbers[i + 1]) {
    let temp = numbers[i];
    numbers[i] = numbers[i + 1];
    numbers[i + 1] = temp;
  }
}
console.log(numbers);

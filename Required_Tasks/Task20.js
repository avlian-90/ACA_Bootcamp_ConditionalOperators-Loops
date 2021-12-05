/* Print the following pattern:
1
2 6
3 7 10
4 8 11 13
5 9 12 14 15 */

let n = 5;
let string = "";
let count = 1;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += count;
  }
  string += "\n";
  count++;
}
console.log(string);

// Can't print the required pattern.

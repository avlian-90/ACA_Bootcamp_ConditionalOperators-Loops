/* Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the
words from the array. */

let sentence = "_, we have a _.";
let words = ["Houston", "problem"];
let arr = sentence.split("");
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < words.length; j++) {
    if (arr[i] === "_") {
      arr[i] = words[j];
    }
  }
}
console.log(arr.join(""));

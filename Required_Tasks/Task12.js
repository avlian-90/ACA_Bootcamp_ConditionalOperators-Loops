/* Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the
words from the array. */

// Way 1
let sentence = "_, we have a _.";
let words = ["Houston", "problem"];
let newSentence;
for (let i = 0; i < words.length; i++) {
  newSentence = sentence.replace("_", words[i]);
}
console.log(newSentence);

// Way 2
// let sentence = "_, we have a _.";
// let words = ["Houston", "problem"];
// let arrSentence = sentence.split("");
// console.log(arrSentence);
// for (let i = 0; i < arrSentence.length; i++) {
//   for (let j = 0; j < words.length; i++) {
//     if (arrSentence[i] === "_") {
//       arrSentence[i] = words[j];
//     }
//   }
// }
// console.log(arrSentence);

// My ways of solving the task. Why doesn't both work? :D
// The way 2 seems to execute an infinity loop, so I've made it a comment.

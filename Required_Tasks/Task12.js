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
let sentence = "_, we have a _.";
let words = ["Houston", "problem"];
let splitedSentence = sentence.split("");
console.log(splitedSentence);
for (let i = 0; i < splitedSentence.length; i++) {
  for (let j = 0; j < words.length; i++) {
    if (splitedSentence[i] === "_") {
      splitedSentence[i] = words[j];
    }
  }
}
console.log(splitedSentence);

// My ways of solving the task. Why doesn't both work? :D

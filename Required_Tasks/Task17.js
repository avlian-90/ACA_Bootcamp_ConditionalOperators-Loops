/* Given a sentence as a string. Split it according to space and comma and create an array consisting of
the words of the array. The last word should not contain the last . or ! . */

let sentence = "Keep your friends close, but your enemies closer.";
let arrOfLetters = sentence.split("");
console.log(arrOfLetters);
for (let i = 0; i < arrOfLetters.length; i++) {
  if (
    arrOfLetters[i] === "," ||
    arrOfLetters[i] === "." ||
    arrOfLetters[i] === "!"
  ) {
    arrOfLetters[i] = "";
  }
}
console.log(arrOfLetters);
let newSentence = arrOfLetters.join("").split(" ");
console.log(newSentence);

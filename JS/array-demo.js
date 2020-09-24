const { default: triviaItems } = require("./trivia-items");

// console.log("Array Demo!!");

// const highScores = [2000, 1000, 500];
// console.log(highScores);
// console.log(highScores[0]);
// console.log(highScores[1]);
// console.log(highScores[2]);
// // Even though there is nothing is defined in the element this will not create an error.
// // Instead it would just be considered "UNDEFINED".
// console.log(highScores[3]);

// console.log(highScores.length);

function printHighScore(score, index) {
  highScores.forEach((score, index) => {
    console.log(`The score at ${index} is ${score}!`);
  });
}

for (let i = 0; i < highScores.length; i++) {
  console.log(`The score at ${i} ${highScores[i]}.`);
}

for (const score of highScores) {
  console.log(`The score is ${score}.`);
}

const triviaitems = [
  { question: "What is 2+2?", answer: "4" },
  { question: "What is the color of the sky?", answer: "Blue" },
  { question: "What is the first letter of the Alphabet?", answer: "A" },
];

triviaItems.forEach((triviaitem, index) => {
  // console.log(triviaitem);
  // console.log(index);
  const playerAnswer = prompt(triviaitem.question);
  if (playerAnswer === triviaitem.answer) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
});

for (let i = 0; i < triviaitems.length; i++) {
  const triviaItem = triviaitems[i];
  const playerAnswer = prompt(triviaitem.question);
  if (playerAnswer === triviaitem.answer) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}

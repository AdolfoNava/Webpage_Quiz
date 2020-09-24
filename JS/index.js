// import "./conditionals-demo.js";
// import "./array-demo.js";

import triviaItems from "./trivia-items.js";
import shuffle from "./shuffle.js";

function displayTriviaItem(triviaItems) {
  //   const question = triviaItem.question;
  //   const correct_answer = triviaItem.correct_answer;
  //   const incorrect_answers = triviaItem.incorrect_answers;

  const { question, correct_answer, incorrect_answers } = triviaItems;
  const allAnswers = [
    correct_answer,
    // incorrect_answers[0],
    // incorrect_answers[1],
    // incorrect_answers[2]];
    ...incorrect_answers,
  ];
  const shuffledAnswers = shuffle(allAnswers);
  console.log(allAnswers);
  console.log(shuffledAnswers);

  const newTrivia = triviaItemTemplate.content.cloneNode(true);

  const questionElement = newTrivia.querySelector(".trivia-item__question");
  questionElement.innerHTML = question;

  const buttonElements = newTrivia.querySelectorAll(".trivia-item__button");
  buttonElements.forEach((button, index) => {
    button.innerHTML = shuffledAnswers[index];
    button.addEventListener("click", onAnswerClick);
  });

  //   buttonElements[0].innerHTML = correct_answer;
  //   buttonElements[1].innerHTML = incorrect_answers[0];
  //   buttonElements[2].innerHTML = incorrect_answers[1];
  //   buttonElements[3].innerHTML = incorrect_answers[2];

  triviaContainer.appendChild(newTrivia);
}

function clearTrivia() {
  for (const child of triviaContainer.children) {
    console.log(triviaContainer.children);
    triviaContainer.removeChild(child);
  }
}

function updateScore(newScore) {
  score = newScore;
  // UPDATE THE DOM
  scoreElement.textContent = score;
}
function updateQuestNumber() {
  questionNumberElement.textContent = `${triviaItemIndex + 1}/${
    triviaItems.length
  }`;
}
function onAnswerClick(event) {
  console.log("Clicked a button");
  const { target } = event;

  const buttonElements = triviaContainer.querySelectorAll(
    ".trivia-item__button"
  );
  buttonElements.forEach((button) => {
    button.disabled = true;
    button.classList.add("trivia-item__button--disabled");
  });

  const selectedAnswer = target.innerHTML;
  const correctAnswer = triviaItems[triviaItemIndex].correct_answer;
  //   Disable all buttons after click

  // Check the Answer and mark it correct or incorrect

  if (selectedAnswer === correctAnswer) {
    updateScore(score + 1);
    target.classList.add("trivia-item__button--correct");
  } else {
    console.log("Wrong Answer");
    target.classList.add("trivia-item__button--incorrect");
  }

  setTimeout(() => {
    clearTrivia();
    triviaItemIndex += 1;
    if (triviaItemIndex === triviaItems.length) {
      alert(`Game Over! Final score is ${score}.`);
    } else {
      displayTriviaItem(triviaItems[triviaItemIndex]);
      updateQuestNumber();
    }
  }, 1000);

  console.log(target.innerHTML);
  console.log(target);
  //   Going to the next question.
}

let score = 0;
let triviaItemIndex = 0;
const scoreElement = document.querySelector("#score");
const questionNumberElement = document.querySelector("#question-number");
const triviaItemTemplate = document.querySelector("#trivia-item-template");
const triviaContainer = document.querySelector("#trivia-container");

updateQuestNumber();
displayTriviaItem(triviaItems[triviaItemIndex]);

// updateQuestNumber();
// console.log(triviaItems);

// Last one gets updated

// const triviaData = {
//   category: "Entertainment: Video Games",
//   type: "multiple",
//   difficulty: "easy",
//   question:
//     "Blinky, Pinky, Inky and Clyde are characters from which classic video game?",
//   correct_answer: "Pac-Man",
//   incorrect_answers: ["Gauntlet", "Space Invaders", "Street Fighter"],
// };

// const triviaItemTemplate = document.querySelector("#trivia-item-template");
// const triviaContainer = document.querySelector("#trivia-container");

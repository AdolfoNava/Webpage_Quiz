console.log("Conditionals Demostration!!");

const playRepsonse = prompt("Would you like to play a game?");

if (playRepsonse.toLowerCase === "yes") {
  alert("Great - Let's get started!");

  const speedResponse = prompt(
    "In the 1984 movie Speed, what is the minimum speed the bus must go to prevent the bomb from exploding?"
  );
  if (speedResponse === "50") {
    alert("Correct!");
  } else if (speedResponse === 40 || speedResponse === 60) {
    alert("Almost!");
  } else {
    alert("Wrong!");
  }
} else {
  alert("Oh okay then, maybe next time....");
}

const playerScore = 3;
if (playerScore > 2) {
  alert("New high score!");
}

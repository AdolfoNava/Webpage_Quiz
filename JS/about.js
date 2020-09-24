const clickButton = document.querySelector("#click-button");
console.log(clickButton);

let numclicks = 0;
function onButtonClicked() {
  numclicks++;
  console.log(`You have clicked on the button ${numclicks}x times.`);
  clickButton.textContent = `You have clicked on the button ${numclicks}x times.`;

  const randomHue = Math.random() * 360;
  console.log(randomHue);
  clickButton.style.backgroundColor = `hsl(${randomHue}, 100%, 25%)`;
  clickButton.style.color = "rgb(255, 255, 255)";
}
clickButton.addEventListener("click", onButtonClicked);

const speakButton = document.querySelector("#speak-button");
speakButton.addEventListener("click", () => {
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(
    "Welcome to our fancy game site!"
  );
  utterance.pitch = 5;
  utterance.rate = 2;
  speechSynthesis.speak(utterance);
});

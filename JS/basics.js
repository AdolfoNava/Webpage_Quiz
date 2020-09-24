// alert("Hello from basics.js 🌐!");
// This prints to the console in the devtools
//console.log("Hello from the console!");
// This gets added at the end of the body elements:
document.body.innerHTML += "<p>Hello from JavaScript!</p>";
// Variables are like boxes for data.
// Data types for variables: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_and_Structure_types
// Strings:
// One use of a variable is to define data that is used multiple times like a post on a social media platform

const message = "Welcome to the website!";
alert(message);
console.log(message);

// Another use of a variable is to capture data from the user.

const name = prompt("What is your name?");
// This is string concatenation:
// document.body.innerHTML += "<h1>Welcome, " + name + "</h1>";
// This is a template string:
document.body.innerHTML += `<h1>Welcome, ${name}!</h1>`;

// variable naming:
// camelCase: characterName, myTopScore - use variables, functions, instances
// PascalCase: ShipSpeed, CartTotal - use construction/classes

// A number variable stores an integer or floating point value.
const plantCost = 2.5;
const potCost = 12.25;
const soilCost = 13.0;
const subtotal = potCost + plantCost + soilCost;
console.log(`The subtotal for your purchase is ${subtotal}.`);

// const item1 = prompt("What is the cost of item 1?");
// const item2 = prompt("What is the cost of item 2?");
// const item3 = prompt("What is the cost of item 3?");
// const itemsubtotal =
//   Number.parseFloat(item1) +
//   Number.parseFloat(item2) +
//   Number.parseFloat(item3);
// console.log(`The subtotal for your items is ${itemSubtotal}.`);

// Declaring a variable const, let, var.
// const = identifier is not allowed to be re-assigned.
// let = identifiers that ARE allowed to be re-assigned.

// Another use of a variable is to track down some data that changes over time.
let numlives = 5;
// These three numlives are all the same ways to have 6 lives
// numlives = numlives+1;
// numlives += 1;
numlives++;
console.log(`You now have ${numlives}x lives left.`);
// numlives = numlives - 3;
numlives -= 3;
console.log(
  `You have fallen down a chasm multiple times. You now have ${numlives}x lives left.`
);

// Object - package up related data and functionality together.
const player = {
  numlives: 5,
  name: "Mike",
  stats: {
    attack: 5,
    defense: 3,
    agility: 2,
  },
};
console.log(`The player ${player.name} has ${player.numlives} lives.`);
// Bracket notation for accessing properties:
console.log(`The player ${player[name]} has ${player[numlives]} lives.`);
console.log(`The player has defense of ${player.stats.defense}.`);

// This is a DOM element.
const JSoutputDiv = document.querySelector("#JS-output");
console.log(JSoutputDiv);
JSoutputDiv.innerHTML += "<p> Hello There! I'm put in by basics.js file.</p>";
JSoutputDiv.innerHTML += "<p> I am inside of the main element.</p>";

// Function is a re-usable block of code.
function sayinghello() {
  console.log("Saying hello from the function!");
}

sayinghello();
sayinghello();
sayinghello();

const sayingBye = () => {
  console.log("Goodbye from the function!");
  console.log("Take good care of yourselves.");
};
sayingBye();
sayingBye();

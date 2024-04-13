const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  //console.log("CLICK");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

/*

votesInteresting = votesInteresting + 2;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log("Upvotes", totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);
*/

function calcFactAge(year) {
  const currentYear = new Date().getUTCFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return `Impossible year. Year needs to be less or equal ${currentYear}`;
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(1990));
console.log(calcFactAge(2037));

// Use arrow function when you need a one line function
// const calcFactAge2 = (year) => 2022 - year;

const calcFactAge2 = (year) =>
  year <= new Date().getFullYear() - year
    ? new Date().getFullYear() - year
    : `impossible year.  Year needs to be less or 
 equal ${new Date().getFullYear()}`;

/*
let votesInteresting = 20;
let votesMindblowing = 23;

if (votesInteresting === votesMindblowing) {
  alert("This fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindblowing) {
  console.log("Interesting fact!");
} else if (votesInteresting < votesMindblowing) {
  console.log("Mindblowing fact!");
}

//falsey values: 0, '', null, undefined
if (votesMindblowing) {
  console.log("MINDBLOWING ACT!!!");
} else {
  console.log("Not so special");
}

let votesFalse = 77;

const totalUpvotes = votesInteresting + votesMindblowing;

// Ternary Operator
const message =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "Might be false, check more sources";

console.log(message);

const text = "Lisbon is the capital of Portugal";

// A method is a function being called on something, like a string
// here toUpperCase is being called on text

const upperText = text.toUpperCase();
console.log(upperText);

// Template literal
const str = `The current fact is "${text}" is ${calcFactAge(2015)} years old.
It is probably ${totalUpvotes > votesFalse ? "correct" : "not true"}.`;
console.log(str);
*/

// Array with a string, integer and boolean.
const fact = ["Lisbon is the capital of Portuagal", 2015, true];

console.log(fact);
console.log(fact[0]);
console.log(fact[0].length);

const [text, createdIn, isCorrect] = fact;
console.log(createdIn);

// Spreading, taking all elements from the fact array and adding them to
// newfact and then adding another value.
// You can only do this operation inside an array.
const newfact = [...fact, "society"];
console.log(newfact);

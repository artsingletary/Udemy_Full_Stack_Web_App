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
const text = "Lisbon is the capital of Portugal";

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
  else return "Impossible year";
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(1990));
console.log(calcFactAge(2037));

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

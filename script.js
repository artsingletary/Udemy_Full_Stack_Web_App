const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";
createFactsList(initialFacts);

function createFactsList(dataArray) {
  //factsList.insertAdjacentHTML("afterbegin", "<li>art</li>");

  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
      ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
        >(Source)</a>
    </p>
    <span class="tag"
       style="background-color: 
       #3b82f6">${fact.category}</span>
    </li>`
  );

  console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);

  // Toggle form visability
  btn.addEventListener("click", function () {
    if (form.classList.contains("hidden")) {
      form.classList.remove("hidden");
      btn.textContent = "Close";
    } else {
      form.classList.add("hidden");
      btn.textContent = "Share a fact";
    }
  });
}

console.log("Yello");
console.dir(btn);

/*

votesInteresting = votesInteresting + 2;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log("Upvotes", totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);

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

console.log("hello worldddddd");

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


// Array with a string, integer and boolean.
const fact = ["Lisbon is the capital of Portuagal", 2015, true];

console.log(fact[2]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [text, createdIn] = fact;
const newfact = [...fact, "society"];
console.log(newfact);

[2, 4, 6, 8].forEach(function (num) {
  console.log(num);
});

const times10 = [2, 4, 6, 8].map(function (num) {
  return num * 10;
});
console.log(times10);

const times11 = [2, 4, 6, 8].map((num) => num * 11);
console.log(times11);

// Array of objects
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);


function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible year. Year needs to be less
   or equal ${currentYear}`;
}

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges);

// LINK TO APP SAMPLE DATA: https://docs.google.com/spreadsheets/d/1eeldcA_OwP4DHYEvjG0kDe0cRys-cDPhc_E9P9G1e3I/edit#gid=0

// Spreading, taking all elements from the fact array and adding them to
// newfact and then adding another value.
// You can only do this operation inside an array.


// Text is a property of the factobj
const factObj = {
  text: "Listbon is the capital of Portugal",
  category: "society",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `the fact ${
      this.text
    }" is from category ${this.category.toUpperCase()}`;
  },
};

console.log(factObj.text);
console.log(factObj["text"]);

const { category, isCorrect } = factObj;
console.log(category);
console.log(factObj.createSummary());

console.log("theis");
*/

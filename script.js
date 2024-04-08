console.log("Hello World!");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  //console.log("CLICK");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  } else {
    form.classList.add("hidden");
  }
});

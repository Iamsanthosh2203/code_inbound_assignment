const nextBtn = document.querySelector("#next");
const preBtn = document.querySelector("#pre");
const submitBtn = document.querySelector("#submit");

const satisfiedSection = document.querySelector(".satisfied");
const pricesSection = document.querySelector(".prices");
const purchaseSection = document.querySelector(".purchase");
const recSection = document.querySelector(".recommend");
const textSection = document.querySelector(".text");
const thankSection = document.querySelector(".thanks");
const buttons = document.querySelectorAll(".buttons");

const sections = [
  satisfiedSection,
  pricesSection,
  purchaseSection,
  recSection,
  textSection,
];

let currentIndex = 0;

function showCurrentSection() {
  for (let i = 0; i < sections.length; i++) {
    if (i === currentIndex) {
      sections[i].classList.remove("none");
    } else {
      sections[i].classList.add("none");
    }
  }

  if (currentIndex === sections.length - 1) {
    nextBtn.classList.add("none");
    submitBtn.classList.remove("none");
  } else {
    nextBtn.classList.remove("none");
    submitBtn.classList.add("none");
  }
}

function checkValues() {
  const selectedOption = document.querySelector(
    'input[name="satisfied"]:checked'
  );
  const pricesOption = document.querySelector('input[name="prices"]:checked');
  const purchaseOption = document.querySelector(
    'input[name="purchase"]:checked'
  );
  const textOption = document.querySelector("textarea");
  const recOption = document.querySelector('input[name="recommend"]:checked');

  if (
    !selectedOption ||
    !pricesOption ||
    !purchaseOption ||
    !textOption ||
    !recOption ||
    textOption.value == ""
  ) {
    alert("Please fill in all the fields.");
    return false;
  }

  return true;
}

function storeValues() {
  const selectedOption = document.querySelector(
    'input[name="satisfied"]:checked'
  ).value;
  const pricesOption = document.querySelector(
    'input[name="prices"]:checked'
  ).value;
  const purchaseOption = document.querySelector(
    'input[name="purchase"]:checked'
  ).value;
  const textOption = document.querySelector("textarea").value;
  const recOption = document.querySelector(
    'input[name="recommend"]:checked'
  ).value;

  localStorage.setItem("satisfied", selectedOption);
  localStorage.setItem("prices", pricesOption);
  localStorage.setItem("purchase", purchaseOption);
  localStorage.setItem("text", textOption);
  localStorage.setItem("recommend", recOption);
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < sections.length - 1) {
    currentIndex += 1;
    showCurrentSection();
  }
});

preBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    showCurrentSection();
  }
});

submitBtn.addEventListener("click", () => {
  if (checkValues()) {
    storeValues();
    console.log("Form submitted successfully!");

    // Hide the form sections
    sections.forEach((section) => {
      section.classList.add("none");
    });

    buttons.forEach((button) => {
      button.classList.add("none");
    });

    thankSection.classList.remove("none");
  }
});

showCurrentSection();

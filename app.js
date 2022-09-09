const allSections = document.querySelectorAll("section");
const progressBarElements = document.querySelectorAll(".progress span");
const allBottles = document.querySelector(".all-bottles").children;

// Vertical Sidebar Navigation
const resetActiveClasses = () => {
  progressBarElements.forEach((link) => {
    link.classList.remove("active");
  });
};

window.addEventListener("scroll", () => {
  allSections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
      resetActiveClasses();
      progressBarElements[index].classList.add("active");
    }
  });
});

progressBarElements.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    resetActiveClasses();
    event.preventDefault();
    const sectionNumber = index;
    const targetSection = document.getElementById(sectionNumber);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

Array.from(allBottles).forEach((bottle, index) => {
  bottle.addEventListener("click", (event) => {
    resetActiveClasses();
    event.preventDefault();
    const sectionNumber = index + 1;
    const targetSection = document.getElementById(sectionNumber);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Modal
const modal = document.querySelector(".modal");
const body = document.querySelector("body");

const showModal = function (e) {
  console.log("HI");
  modal.classList.toggle("hidden");

  if (!modal.classList.contains("hidden")) {
    // Disable scroll
    body.style.overflow = "hidden";
  } else {
    // Enable scroll
    body.style.overflow = "auto";
  }
};

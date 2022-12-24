const sections = document.querySelectorAll(".card-container");
const navLinks = document.querySelectorAll("nav a");

function handleSectionEnter(e) {
  this.classList.add("fade-in");
}

function handleSectionLeave(e) {
  this.classList.add("fade-out");
}

function handleAnimationEnd(e) {
  if (e.animationName === "fade-in") {
    this.classList.remove("fade-in");
  } else if (e.animationName === "fade-out") {
    this.classList.remove("fade-out");
  }
}

sections.forEach(section => {
  section.addEventListener("mouseenter", handleSectionEnter);
  section.addEventListener("mouseleave", handleSectionLeave);
  section.addEventListener("animationend", handleAnimationEnd);
});

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetEl = document.querySelector(targetId);
    targetEl.scrollIntoView({
      behavior: "smooth",
    });
  });
});

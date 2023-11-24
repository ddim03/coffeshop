const navButton = document.querySelector(".nav-btn");
navButton.addEventListener("click", function () {
  const navMenu = document.querySelector(".nav-links");
  navMenu.classList.toggle("show");
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    this.parentElement.classList.remove("show");
  });
});

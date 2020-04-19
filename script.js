const mobileNav = document.querySelector(".navbar__list");
const mobileNavBtn = document.querySelector(".mobile-nav");
const header = document.querySelector(".header-section");

function toggler() {
  mobileNav.classList.toggle("navbar__list--active");
  header.classList.toggle("header-section__nav");
}

mobileNavBtn.addEventListener("click", toggler);

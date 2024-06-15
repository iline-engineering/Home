let currentSlide = 0;

const hamburgerMenu = document.getElementById("hamburger-menu");
const header = document.getElementById("header");
const navLinks = document.getElementById("nav-links");

document.addEventListener("DOMContentLoaded", function () {
  const carousel1 = document.querySelectorAll(".carousel-item")[0];

  carousel1.classList.add("active");

  hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
});

document.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (window.scrollY > 5) {
    header.style.opacity = 0.9;
  } else {
    header.style.opacity = 1;
  }

  if (navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
  }
});

function moveSlide(n) {
  const items = document.querySelectorAll(".carousel-item");
  const totalSlides = items.length;
  console.log(totalSlides);
  // Hide the current slide
  items[currentSlide].classList.remove("active");

  // Calculate the new slide index
  currentSlide = (currentSlide + n + totalSlides) % totalSlides;

  // Move the carousel
  document.querySelector(".carousel-inner").style.transform = `translateX(-${
    currentSlide * 100
  }%)`;

  // Show the new slide
  items[currentSlide].classList.add("active");
}

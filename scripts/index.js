let currentSlide = 0;

const hamburgerMenu = document.getElementById("hamburger-menu");
const header = document.getElementById("header");
const navLinks = document.getElementById("nav-links");

document.addEventListener("DOMContentLoaded", function () {
  hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
});

document.addEventListener("scroll", function () {
  if (window.scrollY > 5) {
    header.style.opacity = 0.95;
  } else {
    header.style.opacity = 1;
  }

  if (navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
  }
});

// Set an interval to move the slide every 4 seconds (4000 milliseconds)
const slideInterval = setInterval(() => {
  moveSlide(1); // Move to the next slide
}, 4000);

function moveSlide(n) {
  const items = document.querySelectorAll(".carousel-item");
  const totalSlides = items.length;

  // Calculate the new slide index
  currentSlide = (currentSlide + n + totalSlides) % totalSlides;

  // Move the carousel
  const carouselInner = document.querySelector(".carousel-inner");
  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

let currentSlide = 0;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel-item")[0].classList.add("active");
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.getElementById("nav-links");

  hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
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

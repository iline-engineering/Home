const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header");
const navLinks = document.querySelector(".nav-links");

document.addEventListener("DOMContentLoaded", function () {
  // scroll event listener
  document.addEventListener("scroll", () => {
    // set header opacity when scrolling
    if (window.scrollY > 1) {
      header.style.opacity = 0.9;
    } else {
      header.style.opacity = 1;
    }
  });

  navMenu.addEventListener("click", () => {
    console.log("click");
    navLinks.style.display = "flex";
  });

  navLinks.addEventListener("click", () => {
    navLinks.style.display = "none";
  });

  document.querySelectorAll(".same-page-nav").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelectorAll(".nav-container a").forEach((link) => {
        link.classList.remove("active");
      });

      this.classList.add("active");

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

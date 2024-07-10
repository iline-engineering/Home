const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header");
const navLinks = document.querySelector(".nav-links");

const qrScanner = document.querySelector(".qr-container");
const qrIcon = document.querySelector(".qr-icon");
const qrImage = document.querySelector(".qr-image");
const qrImageCloseButton = document.querySelector(".qr-image p");

const experienceSlider = document.querySelector(".experience-slider");
const sliderItems = document.querySelectorAll(".slider-item");
let isDragging = false;
let startX, offsetX;

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

  qrIcon.addEventListener("click", () => {
    qrScanner.style.top = "0";
    qrScanner.style.right = "0";
    qrScanner.style.bottom = "auto";
    qrScanner.style.height = "100vh";
    qrScanner.style.width = "100vw";

    qrIcon.style.display = "none";
    qrImage.style.display = "flex";
  });

  qrImageCloseButton.addEventListener("click", () => {
    qrScanner.style.height = "auto";
    qrScanner.style.width = "auto";
    qrScanner.style.top = "auto";
    qrScanner.style.bottom = "1em";
    qrScanner.style.right = "1em";

    qrIcon.style.display = "block";
    qrImage.style.display = "none";
  });

  const startDrag = (e) => {
    isDragging = true;
    const clientX = e.clientX || e.touches[0].clientX;
    startX = clientX;
  };

  const drag = (e) => {
    // if (isDragging) {
    //   const clientX = e.clientX || e.touches[0].clientX;
    //   if (startX - clientX >= 50) {
    //     isDragging = false;
    //     sliderItems.forEach((item) => {
    //       item.style.animation = "autoRun 10s linear infinite";
    //       item.style.animationDelay = "calc((5s / 4) * (var(--position) - 1))";
    //     });
    //     setTimeout(() => {
    //       sliderItems.forEach((item) => {
    //         item.style.animation = "autoRun 20s linear infinite";
    //         item.style.animationDelay =
    //           "calc((10s / 4) * (var(--position) - 1))";
    //       });
    //     }, 1000);
    //   }
    // }
  };

  const endDrag = () => {
    isDragging = false;
  };

  experienceSlider.addEventListener("mousedown", startDrag);
  experienceSlider.addEventListener("touchstart", startDrag);
  experienceSlider.addEventListener("mousemove", drag);
  experienceSlider.addEventListener("touchmove", drag);
  experienceSlider.addEventListener("mouseup", endDrag);
  experienceSlider.addEventListener("touchend", endDrag);
});

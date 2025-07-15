const menuIcon = document.querySelector(".menu-icon");
const smallNav = document.querySelector(".small-nav");
const smallNavLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("active");
  smallNav.classList.toggle("active");
  smallNavLinks.classList.toggle("opacity");

  // Toggle scrolling on body
  if (menuIcon.classList.contains("active")) {
    document.body.style.overflow = "hidden"; // Disable scroll
  } else {
    document.body.style.overflow = ""; // Enable scroll
  }
});




const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const navLinks = document.querySelector(".nav-links");

openBtn.addEventListener("click", () => {
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
});

closeBtn.addEventListener("click", () => {
  navLinks.style.display = "none";
});

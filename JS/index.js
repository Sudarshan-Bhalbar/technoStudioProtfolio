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






// Mouse Following Image
const images = document.querySelectorAll(".trail-image");
const positions = [];

// Initialize positions to {x:0, y:0}
images.forEach(() => positions.push({ x: 0, y: 0 }));

let fadeTimeout;

window.addEventListener("mousemove", (e) => {
  // Clear any existing fade timeout to keep images visible
  clearTimeout(fadeTimeout);

  // Set opacity to 1 to show images
  images.forEach((img) => (img.style.opacity = "1"));

  // Update the leading position to cursor
  positions[0].x = e.clientX;
  positions[0].y = e.clientY;

  // Update trailing images’ positions with easing
  const easing = 0.15; // smaller easing for more distance
  for (let i = 1; i < positions.length; i++) {
    positions[i].x += (positions[i - 1].x - positions[i].x) * easing;
    positions[i].y += (positions[i - 1].y - positions[i].y) * easing;
  }

  // Apply transform with centering offset
  images.forEach((img, index) => {
    const offsetX = img.width / 2;
    const offsetY = img.height / 2;
    img.style.transform = `translate3d(${positions[index].x + 10}px, ${
      positions[index].y + 15
    }px, 0)`;
  });

  // After 300ms of no mousemove, fade images out
  fadeTimeout = setTimeout(() => {
    images.forEach((img) => (img.style.opacity = "0"));
  }, 300);
});

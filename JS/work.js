
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

const images = [
  {
    src: "",
    alt: "Project 1",
    orientation: "landscape",
  },
  {
    src: "../Resources/Works/SmartWatch.jpg",
    alt: "Project 2",
    orientation: "portrait",
  },
  {
    src: "../Resources/Works/img3.jpg",
    alt: "Project 3",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img4.jpg",
    alt: "Project 4",
    orientation: "portrait",
  },
  {
    src: "../Resources/Works/img5.jpg",
    alt: "Project 5",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img6.jpg",
    alt: "Project 6",
    orientation: "landscape",
  },
  {
    src: "../Resources/Works/img7.jpg",
    alt: "Project 7",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img9.jpg",
    alt: "Project 9",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img10.jpg",
    alt: "Project 10",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img11.jpg",
    alt: "Project 11",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img12.jpg",
    alt: "Project 12",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img13.jpg",
    alt: "Project 13",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img14.jpg",
    alt: "Project 14",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img15.jpg",
    alt: "Project 15",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img16.jpg",
    alt: "Project 16",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img17.jpg",
    alt: "Project 17",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img18.jpg",
    alt: "Project 18",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img19.jpg",
    alt: "Project 19",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img20.jpg",
    alt: "Project 20",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img21.jpg",
    alt: "Project 21",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img22.jpg",
    alt: "Project 22",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img23.jpg",
    alt: "Project 23",
    orientation: "square",
  },
  {
    src: "../Resources/Works/img24.jpg",
    alt: "Project 24",
    orientation: "square",
  },
];

const grid = document.getElementById("portfolioGrid");
images.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = `portfolio-item ${item.orientation}`;

  if (index === 0) {
    div.classList.add("first-item-large");
    const span = document.createElement("span");
    span.innerHTML = `
      <h1>OUR</h1>
      <h1>WORK</h1>
      <span></span>
    `;
    div.appendChild(span);
  } else {
    if (index === 1) {
      div.classList.add("second-item-tall");
    }
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    div.appendChild(img);
  }

  grid.appendChild(div);
});


// Image viewer modal
const imageViewer = document.getElementById("imageViewer");
const viewerImg = document.getElementById("viewerImg");
const closeBtn = document.querySelector(".close-btn");

// Add click event listeners to all portfolio-item images
grid.querySelectorAll(".portfolio-item img").forEach((img) => {
 img.addEventListener("click", () => {
  viewerImg.src = img.src;
  viewerImg.alt = img.alt;
  imageViewer.style.display = "flex";
  document.body.style.overflow = "hidden"; // prevent background scroll
 });
});

// Close modal on click of ✖ button
closeBtn.addEventListener("click", () => {
 imageViewer.style.display = "none";
 document.body.style.overflow = ""; // allow scroll again
});


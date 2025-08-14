

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




// --------------------- Testimonials -------------------------------------


const testimonials = [
  {
    quote:
      "Professional and talented, they delivered stunning designs that perfectly matched our vision and deadlines.",
    name: "Tamar Mendelson",
    designation: "Restaurant Critic",
    src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Great communication and flawless execution made this project a breeze. Highly recommend their services!",
    name: "Joe Charlescraft",
    designation: "Frequent Visitor",
    src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
  {
    quote:
      "Innovative and reliable, they consistently produce designs that capture the essence of our brand.",
    name: "Martina Edelweist",
    designation: "Satisfied Customer",
    src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
  {
    quote:
      "A true artist who listens carefully and adapts, ensuring the final product is exactly what we wanted.",
    name: "Martina Edelweist",
    designation: "Satisfied Customer",
    src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
  {
    quote:
      "Exceptional creativity and quality. Our brand looks sharper and more modern thanks to their work.",
    name: "Martina Edelweist",
    designation: "Satisfied Customer",
    src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
  {
    quote:
      "They exceeded all deadlines and delivered designs that made us stand out in a competitive market.",
    name: "Martina Edelweist",
    designation: "Satisfied Customer",
    src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
  {
    quote:
      "Patient, skilled, and detail-oriented – this designer brought fresh life to all our projects.",
    name: "Martina Edelweist",
    designation: "Satisfied Customer",
    src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
];

let activeIndex = 0;
const imageContainer = document.getElementById("image-container");
const nameElement = document.getElementById("name");
const designationElement = document.getElementById("designation");
const quoteElement = document.getElementById("quote");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function updateTestimonial(direction) {
  const oldIndex = activeIndex;
  activeIndex =
    (activeIndex + direction + testimonials.length) % testimonials.length;

  testimonials.forEach((testimonial, index) => {
    let img = imageContainer.querySelector(`[data-index="${index}"]`);
    if (!img) {
      img = document.createElement("img");
      img.src = testimonial.src;
      img.alt = testimonial.name;
      img.classList.add("testimonial-image");
      img.dataset.index = index;
      imageContainer.appendChild(img);
    }

    const offset = index - activeIndex;
    const absOffset = Math.abs(offset);
    const zIndex = testimonials.length - absOffset;
    const opacity = index === activeIndex ? 1 : 0.7;
    const scale = 1 - absOffset * 0.15;
    const translateY = offset === -1 ? "-20%" : offset === 1 ? "20%" : "0%";
    const rotateY = offset === -1 ? "15deg" : offset === 1 ? "-15deg" : "0deg";

    img.style.zIndex = zIndex;
    img.style.opacity = opacity;
    img.style.transform = `translateY(${translateY}) scale(${scale}) rotateY(${rotateY})`;
  });

  nameElement.textContent = testimonials[activeIndex].name;
  designationElement.textContent = testimonials[activeIndex].designation;
  quoteElement.innerHTML = testimonials[activeIndex].quote
    .split(" ")
    .map((word) => `<span class="word">${word}</span>`)
    .join(" ");

  animateWords();
}

function animateWords() {
  const words = quoteElement.querySelectorAll(".word");
  words.forEach((word, index) => {
    word.style.opacity = "0";
    word.style.transform = "translateY(10px)";
    word.style.filter = "blur(10px)";
    setTimeout(() => {
      word.style.transition =
        "opacity 0.2s ease-in-out, transform 0.2s ease-in-out, filter 0.2s ease-in-out";
      word.style.opacity = "1";
      word.style.transform = "translateY(0)";
      word.style.filter = "blur(0)";
    }, index * 20);
  });
}

function handleNext() {
  updateTestimonial(1);
}

function handlePrev() {
  updateTestimonial(-1);
}

prevButton.addEventListener("click", handlePrev);
nextButton.addEventListener("click", handleNext);

// Initial setup
updateTestimonial(0);

// Autoplay functionality
const autoplayInterval = setInterval(handleNext, 5000);

// Stop autoplay on user interaction
[prevButton, nextButton].forEach((button) => {
  button.addEventListener("click", () => {
    clearInterval(autoplayInterval);
  });
});
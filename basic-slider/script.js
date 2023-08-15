const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

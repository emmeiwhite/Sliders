const slider = document.querySelector(".slider");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const cards = document.querySelectorAll(".card");
const cardsPerSlide = 6;

// Wrap the cards in slide divs
for (let i = 0; i < cards.length; i += cardsPerSlide) {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  for (let j = i; j < i + cardsPerSlide && j < cards.length; j++) {
    slide.appendChild(cards[j]);
  }
  slider.appendChild(slide);
}

// Once the wrappers are added, we can we rest assured about slider functionality, which we already completed.
const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

prevButton.addEventListener("click", function () {
  if (counter <= 0) return;
  console.log("prev clicked");
  counter--;
  carousal();
});

nextButton.addEventListener("click", function () {
  if (counter >= slides.length - 1) return;
  console.log(counter);
  console.log("next clicked");
  counter++;
  carousal();
});

function carousal() {
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

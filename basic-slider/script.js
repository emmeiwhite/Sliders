const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

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

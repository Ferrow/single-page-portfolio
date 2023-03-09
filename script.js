const carousel = document.getElementById("carousel");
const slides = carousel.getElementsByClassName("slide");
const prevBtn = document.querySelector(".btn--left");
const nextBtn = document.querySelector(".btn--right");
let index = 0;

function showSlide(n) {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  // Show the slide at the given index
  slides[n].classList.add("active");
}

prevBtn.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  showSlide(index);
});

nextBtn.addEventListener("click", function () {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  showSlide(index);
});

// Show the first slide when the page loads
showSlide(index);

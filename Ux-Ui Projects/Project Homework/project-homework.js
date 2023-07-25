let currentSlide1 = 0;
const slides1 = document.querySelectorAll('.slide-1');

let currentSlide2 = 0;
const slides2 = document.querySelectorAll('.slide-2');

function showSlide(slideIndex, slides) {
  slides.forEach((slide ,index) => {
    const offset = (index - slideIndex) * 100;
    slide.style.transform = `translateX(${offset}%)`;
  });
}

function prevSlide(slides, currentSlide) {
  let prevSlideIndex = currentSlide - 1;
  if (prevSlideIndex < 0) {
    prevSlideIndex = slides.length -1;
  }
  showSlide(prevSlideIndex, slides);
  return prevSlideIndex;
}

function nextSlide(slides, currentSlide) {
  let nextSlideIndex = currentSlide + 1;
  if (nextSlideIndex >= slides.length) {
    nextSlideIndex = 0;
  }
  showSlide(nextSlideIndex, slides);
  return nextSlideIndex;
}

//Show the first slide for each carousel initially 
showSlide(currentSlide1, slides1);
showSlide(currentSlide2, slides2);

//Event Listeners for prev and next buttons of each carousel 
document.querySelector('.carousel-1 .prev-btn').addEventListener('click', () => {
  currentSlide1 = prevSlide(slides1, currentSlide1);
});

document.querySelector('.carousel-1 .next-btn').addEventListener('click', () => {
  currentSlide1 = nextSlide(slides1, currentSlide1);
});

document.querySelector('.carousel-2 .prev-btn').addEventListener('click', () => {
  currentSlide2 = prevSlide(slides2, currentSlide2);
});

document.querySelector('.carousel-2 .next-btn').addEventListener('click', () => {
  currentSlide2 = nextSlide(slides2, currentSlide2)
})
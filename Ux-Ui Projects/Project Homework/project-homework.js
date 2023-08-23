/* let currentSlide1 = 0;
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
*/

/*
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

*/

// JavaScript
let slideIndex1 = 1;
let slideIndex2 = 1;

showSlides(slideIndex1, 1);
showSlides(slideIndex2, 2);

function plusSlides(n, carouselIndex) {
  showSlides(slideIndex1 += n, carouselIndex);
}

function currentSlide(n, carouselIndex) {
  showSlides(slideIndex1 = n, carouselIndex);
}

function showSlides(n, carouselIndex) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { n = 1; }
  if (n < 1) { n = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n - 1].style.display = "block";
  dots[n - 1].className += " active";

  // Update the slide index based on the carousel
  if (carouselIndex === 1) {
    slideIndex1 = n;
  } else if (carouselIndex === 2) {
    slideIndex2 = n;
  }
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
    const offset = (index - slideIndex) * 100;
      slide.style.transform = `translateX(${offset}%)`;
    });
    currentSlide = slideIndex;
  }

function prevSlide() {
    let prevSlideIndex = currentSlide - 1;
    if (prevSlideIndex < 0) {
      prevSlideIndex = slides.length - 1;
    }
    showSlide(prevSlideIndex);
  }

function nextSlide() {
    let nextSlideIndex = currentSlide + 1;
    if (nextSlideIndex >= slides.length) {
      nextSlideIndex = 0;
    }
    showSlide(nextSlideIndex);
  }

// Show the first slide initially
showSlide(currentSlide);

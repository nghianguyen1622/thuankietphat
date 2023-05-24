// Define the slider element
const slider = document.querySelector('.featured-slider');

// Define the slider wrapper and slides elements
const sliderWrapper = slider.querySelector('.slider-wrapper');
const slides = Array.from(sliderWrapper.children);

// Set up the slider
let slideIndex = 0;
let displayedSlides = slider.dataset.display.split(',').map(Number);

function showSlides() {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Set the index of the first and last slides to be displayed
  let firstSlideIndex = slideIndex;
  let lastSlideIndex = slideIndex + displayedSlides[0] - 1;

  // If the last slide index is greater than the total number of slides,
  // wrap around to the beginning of the slide list
  if (lastSlideIndex >= slides.length) {
    lastSlideIndex = lastSlideIndex - slides.length;
    firstSlideIndex = lastSlideIndex - displayedSlides[0] + 1;
  }

  // Show the slides in the range of the first and last slide indices
  for (let i = firstSlideIndex; i <= lastSlideIndex; i++) {
    slides[i].style.display = 'block';
  }
}

// Function to move to the next slide
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlides();
}

// Function to move to the previous slide
function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides();
}

// Show the initial set of slides
showSlides();

// Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 3000);

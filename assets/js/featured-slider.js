// Define the slider element
const slider = document.querySelector('.featured-slider');

// Define the slider wrapper and slides elements
const sliderWrapper = slider.querySelector('.slider-wrapper');
const slides = Array.from(sliderWrapper.children);

// Define the navigation and dots elements
const sliderNav = document.createElement('div');
sliderNav.classList.add('slider-nav');
const prevButton = document.createElement('button');
prevButton.innerHTML = '&#10094;';
const nextButton = document.createElement('button');
nextButton.innerHTML = '&#10095;';
sliderNav.appendChild(prevButton);
sliderNav.appendChild(nextButton);
slider.appendChild(sliderNav);
const sliderDots = document.createElement('div');
sliderDots.classList.add('slider-dots');
for (let i = 0; i < slides.length; i++) {
  const dotButton = document.createElement('button');
  dotButton.setAttribute('data-slide-index', i);
  sliderDots.appendChild(dotButton);
}
slider.appendChild(sliderDots);

// Set up the slider
let slideIndex = 0;
let displayedSlides = slider.dataset.display.split(',').map(Number);
let dots = Array.from(sliderDots.children);

// Function to show the slides
function showSlides() {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  // Hide all dots
  dots.forEach((dot) => {
    dot.classList.remove('active');
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
  // Highlight the dot corresponding to the current slide
  dots[slideIndex].classList.add('active');
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
 
 // Function to automatically move to the next slide
 function autoSlide() {
   nextSlide();
 }
 
 // Add event listeners to the navigation buttons
 prevButton.addEventListener('click', prevSlide);
 nextButton.addEventListener('click', nextSlide);
 
 // Add event listeners to the dots
 dots.forEach((dot) => {
   dot.addEventListener('click', () => {
     slideIndex = parseInt(dot.getAttribute('data-slide-index'));
     showSlides();
   });
 });
 
 // Show the initial set of slides and highlight the first dot
 showSlides();
 
 // Automatically move to the next slide every 3 seconds
 setInterval(autoSlide, 3000);
 

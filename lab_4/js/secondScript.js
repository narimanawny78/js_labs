let currentSlide = 0;
let slides = document.querySelectorAll('.slide');
let totalSlides = slides.length;
let slideInterval;

// Show the first slide initially
slides[currentSlide].classList.add('active');

// Next button
document.getElementById('next').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
});

// Previous button
document.getElementById('prev').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
});

// Slide show button
document.getElementById('slideShow').addEventListener('click', () => {
    if (!slideInterval) {
        slideInterval = setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % totalSlides;
            slides[currentSlide].classList.add('active');
        }, 2000); // Change slide every 2 seconds
    }
});

// Stop button
document.getElementById('stop').addEventListener('click', () => {
    clearInterval(slideInterval);
    slideInterval = null;
});
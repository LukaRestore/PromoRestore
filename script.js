const slides = document.querySelectorAll('.slide');
let index = 0;
const delay = 5000; // 5 secondi

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === i);
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

showSlide(index);
setInterval(nextSlide, delay);

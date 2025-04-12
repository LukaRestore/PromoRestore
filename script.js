// Elenco delle immagini da mostrare
const imageNames = [
  'promo1.jpg',
  'promo2.jpg',
  'promo3.jpg',
  'promo4.jpg', // Aggiungi altre immagini se necessario
];

// URL della cartella immagini su GitHub
const imagesFolderURL = "https://raw.githubusercontent.com/tuonome/PromoRestore/main/images/";

// Funzione per creare dinamicamente le immagini nello slideshow
function loadImages() {
  const slideshowContainer = document.getElementById('slideshow');

  // Crea un'immagine per ogni nome nella lista
  imageNames.forEach(imageName => {
    const img = document.createElement('img');
    img.src = imagesFolderURL + imageName;
    img.classList.add('slide');
    slideshowContainer.appendChild(img);
  });

  // Avvia lo slideshow
  startSlideshow();
}

// Funzione per gestire lo slideshow
let index = 0;
const delay = 5000; // 5 secondi
const slides = [];

function startSlideshow() {
  const images = document.querySelectorAll('.slide');
  images.forEach(slide => slides.push(slide));

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
}

// Carica le immagini e avvia lo slideshow
loadImages();

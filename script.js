// URL della cartella immagini su GitHub
const imagesFolderURL = "https://raw.githubusercontent.com/tuonome/PromoRestore/main/images/";

// Funzione per creare dinamicamente le immagini nello slideshow
async function loadImages() {
  const response = await fetch('https://api.github.com/repos/tuonome/PromoRestore/contents/images');
  const data = await response.json();
  
  if (Array.isArray(data)) {
    const slideshowContainer = document.getElementById('slideshow');
    
    data.forEach(item => {
      if (item.type === 'file') {
        // Crea un elemento immagine per ogni file trovato
        const img = document.createElement('img');
        img.src = imagesFolderURL + item.name;
        img.classList.add('slide');
        slideshowContainer.appendChild(img);
      }
    });

    // Avvia lo slideshow
    startSlideshow();
  }
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

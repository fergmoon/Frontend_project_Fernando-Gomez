
//=========comienzo Menú hamburguesa=========
const elment = document.querySelector('.hamburger');
const elment1 = document.querySelector('.nav-list');

elment.addEventListener("click", () => {
  elment.classList.toggle('active');
  elment1.classList.toggle('active');
});
//========fin menú hamburguesa===============


//=========comienzo carrusel=========
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function showSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  showSlide(currentIndex);
}

// Event listeners for arrow navigation
document.querySelector('.carousel-container').addEventListener('click', function (event) {
  const target = event.target;
  if (target.classList.contains('next')) {
    nextSlide();
  } else if (target.classList.contains('prev')) {
    prevSlide();
  }
});

//=========Fin carrusel=========

//=========inicio Flechas carrusel=========

const carouselContainer = document.querySelector('.carousel-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Event listener para la flecha izquierda
leftArrow.addEventListener('click', prevSlide);

// Event listener para la flecha derecha
rightArrow.addEventListener('click', nextSlide);

// Asegúrate de que el carrusel esté visible al cargar la página
showSlide(currentIndex);

// Función para mostrar una diapositiva
function showSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}
//=========fin Flechas carrusel=========
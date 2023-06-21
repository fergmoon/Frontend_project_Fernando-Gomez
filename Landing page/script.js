
//=========comienzo Menú hamburguesa=========
const elment = document.querySelector('.hamburger');
const elment1 = document.querySelector('.nav-list');

elment.addEventListener("click", ()=> {
  elment.classList.toggle('active');
  elment1.classList.toggle('active');
})  
//========fin menú hamburguesa===============
//  // Variables para controlar el desplazamiento del carrusel
//  const carouselTrack = document.querySelector('.carousel-track');
//  const prevButton = document.querySelector('.carousel-control.prev');
//  const nextButton = document.querySelector('.carousel-control.next');
//  const slideWidth = document.querySelector('.carousel-slide').offsetWidth;

//  // Evento clic en la flecha izquierda
//  prevButton.addEventListener('click', () => {
//    carouselTrack.scrollLeft -= slideWidth;
//  });

//  // Evento clic en la flecha derecha
//  nextButton.addEventListener('click', () => {
//    carouselTrack.scrollLeft += slideWidth;
//  });


//=========comienzo mandos carrusel=========

// Obtener elementos del carrusel

const carouselContainer = document.querySelector('.carousel-container');
const carouselTrack = document.querySelector('.carousel-slides');
const carouselSlides = Array.from(document.querySelectorAll('.carousel-item'));
const prevButton = document.querySelector('.arrow-left');
const nextButton = document.querySelector('.arrow-right');
const dotsContainer = document.querySelector('.carousel-dots');

//Estas variables obtienen referencias a diferentes elementos del carrusel. "carouselTrack" representa el contenedor de las diapositivas del carrusel, "carouselSlides" es un array de todas las diapositivas, "prevButton" y "nextButton" representan los botones de navegación previo y siguiente, respectivamente, y "dotsContainer" es el contenedor de los puntos de navegación.


// Variables de control del carrusel
let slideWidth = carouselContainer.getBoundingClientRect().width / 12;
let currentIndex = 0;  
//Esto dividirá el ancho del contenedor del carrusel entre 12 para obtener el ancho de cada imagen. Además, asegúrate de comentar o eliminar las líneas de código que hacen referencia a carouselTrack


//Estas variables controlan el ancho de cada diapositiva del carrusel y el índice actual del slide.


// Función para ajustar la posición del carrusel
const setCarouselPosition = () => {
  carouselTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
};


// Función para actualizar los estilos de los puntos
const updateDots = () => {
  const dots = Array.from(dotsContainer.children);
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
};
//Estas funciones se encargan de ajustar la posición del carrusel y actualizar los estilos de los puntos de navegación en función del índice actual del slide.


// Función para avanzar al siguiente slide
const nextSlide = () => {
  if (currentIndex === carouselSlides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  setCarouselPosition();
  updateDots();
};

// Función para retroceder al slide anterior
const prevSlide = () => {
  if (currentIndex === 0) {
    currentIndex = carouselSlides.length - 1;
  } else {
    currentIndex--;

  }
  setCarouselPosition();
  updateDots();
};

//Estas funciones controlan el avance y retroceso de los slides. Al hacer clic en el botón de siguiente (nextButton) o anterior (prevButton), se actualiza el índice actual del slide y se llaman a las funciones para ajustar la posición del carrusel y actualizar los puntos de navegación.


// Agregar eventos de clic a los botones de flecha
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Crear puntos de navegación
carouselSlides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.addEventListener('click', () => {
    currentIndex = index;
    setCarouselPosition();
    updateDots();
  });
  dotsContainer.appendChild(dot);
});



//Este fragmento de código crea los puntos de navegación del carrusel. Por cada diapositiva del carrusel, se crea un elemento "div" para representar un punto de navegación. Se añade la clase "dot" al elemento y se agrega un event listener para cambiar al slide correspondiente

// Inicializar el carrusel
setCarouselPosition();
updateDots();

//=========fin mandos carrusel=========
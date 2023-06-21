
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



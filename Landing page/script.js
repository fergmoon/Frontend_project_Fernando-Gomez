
//=========comienzo Menú hamburguesa=========
const elment = document.querySelector('.hamburger');
const elment1 = document.querySelector('.nav-list');

elment.addEventListener("click", () => {
  elment.classList.toggle('active');
  elment1.classList.toggle('active');
});
//========fin menú hamburguesa===============


//=========comienzo carrusel=========
const rectangles = document.querySelectorAll('.rectangle');
const images = document.querySelectorAll('.carousel-image');

rectangles.forEach((rectangle, index) => {
  rectangle.addEventListener('click', () => {
    // Removemos la clase 'active' de todos los rectángulos y las imágenes
    rectangles.forEach((rectangle) => rectangle.classList.remove('active'));
    images.forEach((image) => image.classList.remove('active'));
    
    // Agregamos la clase 'active' al rectángulo y la imagen seleccionada
    rectangle.classList.add('active');
    images[index].classList.add('active');
  });
});


//=========Fin carrusel=========


console.log("Loading Javascript del Proyecto Dimenzionar...")

function saveUser (){

  let nameUser = document.getElementById("name");
  let last_nameUser = document.getElementById("last_name");
  let phoneUser = document.getElementById("phone");
  let e_mailUser = document.getElementById("e_mail");
  let user_nameUser = document.getElementById("user_name");
  let passwordUser = document.getElementById("password");


  let user = {
    name:nameUser.value,
    last_name:last_nameUser.value,
    phone:phoneUser.value,
    e_mail:e_mailUser.value,
    user_name:user_nameUser.value,
    password:passwordUser.value
  }

  console.log(user);
  
  let url ="http://localhost:8000/api/user"; //url en postman

  fetch(url,{
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user),
  }).then(response =>{

    console.log(response);

})






alert("Creación de usuario")


  return true;
}




















/*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*==*
/*ANIMACIONES  Y  EFECTOS DE PAGINA*/

//=========comienzo carrusel=========

const rectangles = document.querySelectorAll('.rectangle');
const images = document.querySelectorAll('.carousel-image');
const carouselContainer = document.querySelector('.carousel-container');
const rectangleLayer = document.querySelector('.rectangle-layer');
let activeIndex = 0; // Índice de la imagen activa inicialmente

// Función para actualizar el estado del carrusel
const updateCarousel = () => {
  // Removemos la clase 'active' de todos los rectángulos y las imágenes
  rectangles.forEach((rectangle) => rectangle.classList.remove('active'));
  images.forEach((image) => {
    image.classList.remove('active');
    image.style.transform = 'scale(1)'; // Reiniciamos el efecto de zoom
  });

  // Agregamos la clase 'active' al rectángulo y la imagen seleccionada
  rectangles[activeIndex].classList.add('active');
  images[activeIndex].classList.add('active');

  // Aplicamos el efecto de zoom a la imagen seleccionada
  images[activeIndex].style.transform = 'scale(1.2)';
};

// Evento click en los rectángulos
rectangles.forEach((rectangle, index) => {
  rectangle.addEventListener('click', () => {
    activeIndex = index;
    updateCarousel();
    images[activeIndex].scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  });
});

// Llamamos a la función updateCarousel para configurar el estado inicial del carrusel
updateCarousel();

// Ajuste del tamaño del contenedor del carrusel al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
  const carouselWidth = carouselContainer.offsetWidth;
  carouselContainer.style.transform = `translateX(${-activeIndex * carouselWidth}px)`;
});

// Ajuste de la posición de la capa de rectángulos al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
  const carouselWidth = carouselContainer.offsetWidth;
  const rectangleLayerWidth = rectangleLayer.offsetWidth;
  rectangleLayer.style.left = `calc(50% - ${rectangleLayerWidth / 2}px)`;
});



//=========Fin carrusel=========


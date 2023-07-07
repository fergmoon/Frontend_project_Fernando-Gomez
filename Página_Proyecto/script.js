console.log("Loading Javascript del Proyecto Dimenzionar...")


//================INGRESO FORMULARIO INDEX==========================



//============== FLECHA ARRIBA  =====================
$(document).ready(function () {

  $('.ir-arriba').click(function () {

    $('body,html').animate({

      scrollTop: '0px'

    }, 300);

  });

  $(window).scroll(function () {

    if ($(this).scrollTop() > 0) {

      $('.ir-arriba').slideDown(300);

    } else {

      $('.ir-arriba').slideUp(300);
    }
  });
});


/* =============   API s   ==================== */

function saveUser() {

  let nameUser = document.getElementById("name").value;
  let last_nameUser = document.getElementById("last_name").value;
  let phoneUser = document.getElementById("phone").value;
  let e_mailUser = document.getElementById("e_mail").value;
  let user_nameUser = document.getElementById("user_name").value;
  let passwordUser = document.getElementById("password").value;

  //Validar campos obligatorios

  if (
    nameUser === "" ||
    last_nameUser === "" ||
    phoneUser === "" ||
    e_mailUser === "" ||
    user_nameUser === "" ||
    passwordUser === ""
    ){
      alert("Por favor complete todos los campos");
      return;
    }

    let user = {
      name: nameUser,
      last_name: last_nameUser,
      phone: phoneUser,
      e_mail: e_mailUser,
      user_name: user_nameUser,
      password: passwordUser
    }

  console.log(user);

  let url = "http://localhost:8000/api/user";


  fetch(url, {                        //url en postman
    method: "POST",
    headers: {                      //enviar header
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user),    //enviar body en json
  }).then(response => {             //respuesta

    console.log(response.json());

    if (response.status == 200) {
      console.log("Creación exitosa de Usuario");

      alert("Creación Exitosa de Usuario");

    } else {
      alert("Error creando usuario");
    }
  }).then(result => {

    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });


  return true;
}


function clearForm() {

  document.getElementById("name").value = "";
  document.getElementById("last_name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("e_mail").value = "";
  document.getElementById("user_name").value = "";
  document.getElementById("password").value = "";
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


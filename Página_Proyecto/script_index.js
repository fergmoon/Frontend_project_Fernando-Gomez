console.log("Loading script_index...")


/*========== FORMULARIO INGRESO INDEX =================*/


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Obtener los valores de los campos de entrada
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Realizar la validación de las credenciales
    if (username === 'admin' && password === 'admin') {
      // Redirige al usuario a la página de admin---Falta hacerla =(
      
      administrador
      window.location.href = 'admin.html';   //Falta hacerla =(
    } else {
      // Redirige al usuario a la página de visitantes
      window.location.href = 'DimWebpage.html';
    }
  });


  /****************     APIs     ******************/

function saveUser() {

  let nameUser = document.getElementById("name");
  let last_nameUser = document.getElementById("last_name");
  let phoneUser = document.getElementById("phone");
  let e_mailUser = document.getElementById("e_mail");
  let user_nameUser = document.getElementById("user_name");
  let passwordUser = document.getElementById("password");


  let user = {
    name: nameUser.value,
    last_name: last_nameUser.value,
    phone: phoneUser.value,
    e_mail: e_mailUser.value,
    user_name: user_nameUser.value,
    password: passwordUser.value
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

      alert("Creación Exitosa de Usuario");

    } else {

      alert("Error creando usuario");

    }


  }).then(result => {

    console.log(result);
  })


  // alert("Creación de usuario")


  return true;
}

//===============CONSULTAR USUARIOS======================//

function getUsers() {
    
    let url = "http://localhost:8000/api/users";

    let params = {
    METHOD: "GET",
    headers: {   //solo header. No body por que no se envían datos en la petición
      "Content-Type": "application json"
    },
  }

  fetch(url, params).then((response) => {

    console.log(response);    

  });

  return true;
}

//===============CONSULTAR UNICO USUARIO======================//

function getUser() {

    let id = document.getElementById("id").value;
    
    let url = "http://localhost:8000/api/user?id=" + id;

    let params = {
        METHOD: "GET",
        headers: {   //solo header. No body por que no se envían datos en la petición
        "Content-Type": "application json"
        },        
  }

  fetch(url,params)
  
    .then((response) => response.json())    

    .then((data)=>{

        console.log(data);
        document.getElementById("name").value = data.name;
        document.getElementById("last_name").value = data.last_name;
        document.getElementById("phone").value = data.phone;
        document.getElementById("e_mail").value = data.e_mail;
        document.getElementById("user_name").value = data.user_name;
        document.getElementById("password").value = data.password;

    })
  .catch((error)=>{

    console.log(error);
  });

  return false;  // Evitar que el formulario se envíe y la página se recargue

  }


  //===============ACTUALIZAR USUARIO======================//

  function updateUser() {

    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("last_name").value;
    let phone = document.getElementById("phone").value;
    let e_mail = document.getElementById("e_mail").value;
    let username = document.getElementById("user_name").value;
    let password = document.getElementById("password").value;

    let url = "http://localhost:8000/api/user?id=" + id;

    let params = {
        method:"PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            last_name: lastname,
            phone: phone,
            e_mail: e_mail,
            user_name: username,
            password:password,
        })
    };

    fetch(url, params)
    .then((response) => response.json())
    .then((data) => {
      // Actualizar campos del formulario con los datos recibidos
      document.getElementById("name").value = data.user.name;
      document.getElementById("last_name").value = data.user.last_name;
      // Actualizar los demás campos si es necesario

      // Mostrar mensaje de éxito o confirmación
      console.log("Actualización exitosa");
    })
    .catch((error) => {
      console.log(error);
    });
  }

//===============ELIMINAR USUARIO======================//

function deleteUser(){

    let id = document.getElementById("id").value;
    let url = 'http://localhost:8000/api/user?id=' + id;

    let params = {
    method: "DELETE",
    };
  
  fetch(url,params)
    .then((response)=>response.json())
    .then((data)=>{

    // Mostrar mensaje de éxito o confirmación
    console.log("Usuario eliminado exitosamente");
    clearForm();  // Actualizar campos
  })

  .catch((error)=>{
    console.log(error);
  }); 

}

//=============== LIMPIAR FORMULARIO =====================

// function clearForm() {
//   document.getElementById("id").value = "";
//   document.getElementById("name").value = "";
//   document.getElementById("last_name").value = "";
//   document.getElementById("phone").value = "";
//   document.getElementById("e_mail").value = "";
//   document.getElementById("user_name").value = "";
//   document.getElementById("password").value = "";
// }

function clearForm() {
  var idElement = document.getElementById("id");
  if (idElement) {
    idElement.value = "";
  }
  var nameElement = document.getElementById("name");
  if (nameElement) {
    nameElement.value = "";
  }
  var lastNameElement = document.getElementById("last_name");
  if (lastNameElement) {
    lastNameElement.value = "";
  }
  var phoneElement = document.getElementById("phone");
  if (phoneElement) {
    phoneElement.value = "";
  }
  var emailElement = document.getElementById("e_mail");
  if (emailElement) {
    emailElement.value = "";
  }
  var usernameElement = document.getElementById("user_name");
  if (usernameElement) {
    usernameElement.value = "";
  }
  var passwordElement = document.getElementById("password");
  if (passwordElement) {
    passwordElement.value = "";
  }
}
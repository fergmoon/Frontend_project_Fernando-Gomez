console.log("Loading script_index...")



/*========== FORMULARIO INGRESO INDEX =================*/


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Obtener los valores de los campos de entrada
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Realizar la validación de las credenciales
    if (username === 'admin' && password === 'admin') {
      // Redirige al usuario a la página de admini
      
      administrador
      window.location.href = 'admin.html';
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

//===============CONSULTAR USUARIOS======================


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

    console.log(response.json());

  });

  return true;
}


//===============ELIMINAR USUARIO======================//

function deleteUser(){

  let nameUser = document.getElementById("name");
  let last_nameUser = document.getElementById("last_name");

  let user = {
    name: nameUser.value,
    last_name: last_nameUser.value,
  }

  let url = "http://localhost:80007api/user?id=";

  let params = {
    METHOD: "DELETE",
    headers:{
      "Content Type": "application json"
    },
    body:JSON.stringify(user),
  }

  console.log(user);

}


    // Resultados de ejemplo obtenidos de la API
    const results = [
        {
          name: 'John',
          last_name: 'Doe',
          age: 30
        },
        {
          name: 'Jane',
          last_name: 'Smith',
          age: 25
        },
        {
          name: 'Mike',
          last_name: 'Johnson',
          age: 35
        }
      ];
  
      // Obtener el contenedor de resultados
      const resultsContainer = document.getElementById('results-container');
  
      // Crear un elemento de lista desordenada
      const ulElement = document.createElement('ul');
  
      // Mostrar los resultados en la interfaz
      results.forEach(result => {
        const liElement = document.createElement('li');
        liElement.className = 'result';
  
        const nameElement = document.createElement('h3');
        nameElement.textContent = result.name;
  
        const lastNameElement = document.createElement('p');
        lastNameElement.textContent = result.last_name;
  
        const ageElement = document.createElement('p');
        ageElement.textContent = 'Age: ' + result.age;
  
        liElement.appendChild(nameElement);
        liElement.appendChild(lastNameElement);
        liElement.appendChild(ageElement);
  
        ulElement.appendChild(liElement);
      });

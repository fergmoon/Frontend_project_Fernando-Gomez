console.log("Loading script_index...")

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Obtén los valores de los campos de entrada
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Realiza la validación de las credenciales
    if (username === 'admin' && password === 'admin') {
      // Redirige al usuario a la página de admini
      
      strador
      window.location.href = 'admin.html';
    } else {
      // Redirige al usuario a la página de visitantes
      window.location.href = 'DimWebpage.html';
    }
  });
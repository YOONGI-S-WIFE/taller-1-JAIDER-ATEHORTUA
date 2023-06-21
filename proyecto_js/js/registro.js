let btnBurguer = document.querySelector(".toggle-container");

let nav = document.querySelector(".navegation")

btnBurguer.addEventListener("click",function menuActivate() {

    if (nav.className == "navegation") {

        nav.className = "navegation navegation2"
    }
    
    else{
        
        nav.className = "navegation"

    }
})

    function numDocumento(params) {
        
        var campo = document.getElementById("numDocumento").value;
        var pattern = /^\d{5,}$/;
  
        if (!pattern.test(campo)) {
          alert("El campo debe tener al menos 5 caracteres numéricos.");
        } else {
          
        }

}

function nombre() {
    var campo = document.getElementById("nombre").value;
    var pattern = /^[a-zA-Z0-9]+$/;

    if (!pattern.test(campo)) {
      alert("El campo solo debe contener caracteres alfanuméricos.");
    } else {
      
    }
}

function apellido() {
    var campo = document.getElementById("apellido").value;
    var pattern = /^[a-zA-Z0-9]+$/;

    if (!pattern.test(campo)) {

      alert("El campo solo debe contener caracteres alfanuméricos.");

    } else {
      
    }
}

function edad() {

    var fechaNacimiento = new Date(document.getElementById("fecha").value);
    var fechaActual = new Date();
    var edadMinima = 18;

    fechaNacimiento.setFullYear(fechaNacimiento.getFullYear() + edadMinima);

    if (fechaNacimiento > fechaActual) {

      alert("La fecha de nacimiento debe corresponder a una edad de al menos 18 años.");

    } else {

      alert("La fecha de nacimiento es válida.");

    }
}

function correo() {

    var correo = document.getElementById("correo").value;
      var dominioPermitido = "@misena.edu.co";

      if (correo.indexOf(dominioPermitido) === -1) {

        alert("El correo electrónico debe tener el dominio @misena.edu.co");

      } else {
       
      }    
}

function password() {
    
var contrasena = document.getElementById("password").value;

      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;

      if (!regex.test(contrasena)) {

        alert("La contraseña debe incluir al menos una letra mayúscula, un número, una letra minúscula, un carácter especial y tener una longitud mínima de 10 caracteres.");

      } else {

      }

}

function coincidencia() {

    pass = document.getElementById("password").value;
    pass_2 = document.getElementById("confirmarPassword").value;

    if (pass === pass_2) {
        
    } else {

        alert("las contraseñas no coinciden")
        
    }
    
}

function registrar() {

    numDocumento();
    nombre();
    apellido();
    edad();
    correo();
    password();
    coincidencia();

  }
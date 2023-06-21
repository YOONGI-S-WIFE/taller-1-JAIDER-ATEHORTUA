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

function comprobarRespuesta() {

    var nombreSeleccionado = document.getElementById("nombre").value;
    var apellidoSeleccionado = document.getElementById("apellido").value;
    var actividadSeleccionada = document.getElementById("actividad").value;
    
    if (nombreSeleccionado === "Juan" && apellidoSeleccionado === "Pérez" && actividadSeleccionada === "Matemáticas") {

      alert("La respuesta es correcta.");

    } else if (nombreSeleccionado === "María" && apellidoSeleccionado === "Gómez" && actividadSeleccionada === "Historia") {

      alert("La respuesta es correcta.");

    } else if (nombreSeleccionado === "Carlos" && apellidoSeleccionado === "López" && actividadSeleccionada === "Arte") {

      alert("La respuesta es correcta.");

    } else {

      alert("La respuesta es incorrecta.");
      
    }
  }
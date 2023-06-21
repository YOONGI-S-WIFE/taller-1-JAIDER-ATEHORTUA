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

function accion() {

    var palabra = document.getElementById("palabra").value;
    var opcion = document.getElementById("opciones").value;
    var resultado = "";

    if (opcion === "contar") {

      alert ("La longitud de la palabra es: " + palabra.length)

    } else if (opcion === "mayuscula") {

      alert ("La palabra en mayúsculas es: " + palabra.toUpperCase())

    } else if (opcion === "minuscula") {

     alert ("La palabra en minúsculas es: " + palabra.toLowerCase())

    } else if (opcion === "primer") {

      alert ("El primer carácter de la palabra es: " + palabra.charAt(0))

    }

    

  }


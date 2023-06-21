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

function realizarConversion() {

    var temperatura = parseFloat(document.getElementById("temperatura").value);
    var escalaOrigen = document.getElementById("escala").value;
    var escalaDestino = document.getElementById("conversion").value;

    if (escalaOrigen === escalaDestino) {

      resultado = "Las escalas de temperatura son iguales. No se requiere conversión.";
    
    } else if (escalaOrigen === "celsius") {

      if (escalaDestino === "fahrenheit") {

        alert (temperatura + "°C equivale a " + (temperatura * 9/5 + 32) + "°F.") ;
     
    } else if (escalaDestino === "kelvin") {

        alert (temperatura + "°C equivale a " + (temperatura + 273.15) + "K.") ;
      
    }

    } else if (escalaOrigen === "fahrenheit") {

      if (escalaDestino === "celsius") {

        alert (temperatura + "°F equivale a " + ((temperatura - 32) * 5/9) + "°C.") ;
      
    } else if (escalaDestino === "kelvin") {

        alert (temperatura + "°F equivale a " + ((temperatura - 32) * 5/9 + 273.15) + "K.") ;
      
    }

    } 
    
    else if (escalaOrigen === "kelvin") {

      if (escalaDestino === "celsius") {

        alert (temperatura + "K equivale a " + (temperatura - 273.15) + "°C.") ;
      
    } else if (escalaDestino === "fahrenheit") {

        alert (temperatura + "K equivale a " + ((temperatura - 273.15) * 9/5 + 32) + "°F.") 
    
    }

    }

  }
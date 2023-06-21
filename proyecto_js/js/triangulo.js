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

function clasificarTriangulo() {

    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var lado3 = parseFloat(document.getElementById("lado3").value);
    
    if (!isNaN(lado1) && !isNaN(lado2) && !isNaN(lado3) && lado1 > 0 && lado2 > 0 && lado3 > 0) {
      
        if (lado1 === lado2 && lado2 === lado3) {

        alert("El triángulo es equilátero.");
      
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        
        alert("El triángulo es isósceles.");
      
    } else {
        
        alert("El triángulo es escaleno.");
      
    }
    
} else {

      
    alert("Ingresa valores válidos para los lados del triángulo.");
    
}

  }
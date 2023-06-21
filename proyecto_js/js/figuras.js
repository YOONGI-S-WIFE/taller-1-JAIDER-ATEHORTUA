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

function calcularAreaCirculo() {

    var radio = parseFloat(prompt("Ingresa el radio del círculo:"));
    
    if (!isNaN(radio) && radio > 0) {

      var area = Math.PI * Math.pow(radio, 2);
      alert("El área del círculo es: " + area.toFixed(2));

    } else {

      alert("Ingresa un valor válido para el radio del círculo.");
    
    }

  }
  
  function calcularPerimetroCirculo() {

    var radio = parseFloat(prompt("Ingresa el radio del círculo:"));
    
    if (!isNaN(radio) && radio > 0) {

      var perimetro = 2 * Math.PI * radio;
      alert("El perímetro del círculo es: " + perimetro.toFixed(2));
    
    } else {

      alert("Ingresa un valor válido para el radio del círculo.");
    
    }
  
}
  
  function calcularAreaCuadrado() {

    var lado = parseFloat(prompt("Ingresa la longitud del lado del cuadrado:"));
    
    if (!isNaN(lado) && lado > 0) {

      var area = Math.pow(lado, 2);
      alert("El área del cuadrado es: " + area.toFixed(2));
    
    } else {

        alert("Ingresa un valor válido para la longitud del lado del cuadrado.");
    
    }

  }
  
  function calcularPerimetroCuadrado() {

    var lado = parseFloat(prompt("Ingresa la longitud del lado del cuadrado:"));
    
    if (!isNaN(lado) && lado > 0) {

      var perimetro = 4 * lado;
      alert("El perímetro del cuadrado es: " + perimetro.toFixed(2));
    
    } else {

      alert("Ingresa un valor válido para la longitud del lado del cuadrado.");
    
    }
  
}
  
  function calcularAreaTriangulo() {

    var base = parseFloat(prompt("Ingresa la base del triángulo:"));
    var altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
    
    if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {

      var area = (base * altura) / 2;
      alert("El área del triángulo es: " + area.toFixed(2));
    
    } else {

      alert("Ingresa valores válidos para la base y la altura del triángulo.");
    
    }
  
}
  
  function calcularPerimetroTriangulo() {

    var lado1 = parseFloat(prompt("Ingresa la longitud del primer lado del triángulo:"));
    var lado2 = parseFloat(prompt("Ingresa la longitud del segundo lado del triángulo:"));
    var lado3 = parseFloat(prompt("Ingresa la longitud del tercer lado del triángulo:"));
    
    if (!isNaN(lado1) && !isNaN(lado2) && !isNaN(lado3) && lado1 > 0 && lado2 > 0 && lado3 > 0) {

      var perimetro = lado1 + lado2 + lado3;
      alert("El perímetro del triángulo es: " + perimetro.toFixed(2));
    
    } else {

      alert("Ingresa valores válidos para los lados del triángulo.");
    
    }
  
}
  
  function calcularAreaRectangulo() {

    var base = parseFloat(prompt("Ingresa la base del rectángulo:"));
    var altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));
    
    if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {

      var area = base * altura;

      alert("El área del rectángulo es: " + area.toFixed(2));

    } else {

      alert("Ingresa valores válidos para la base y la altura del rectángulo.");
    
    }
  
}
  
  function calcularPerimetroRectangulo() {

    var base = parseFloat(prompt("Ingresa la base del rectángulo:"));
    var altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));
    
    if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {

        var perimetro = 2 * (base + altura);

      alert("El perímetro del rectángulo es: " + perimetro.toFixed(2));
    
    } else {

      alert("Ingresa valores válidos para la base y la altura del rectángulo.");
    
    }
  
}

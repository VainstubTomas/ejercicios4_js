//Tomando como base la sintaxis para la creación de funciones crea al menos 3 de ellas donde se cumpla con un algoritmo de entrada de datos, procesamiento de la información y salida de los datos procesados.

//Para introducir los datos puedes apoyarte de la función prompt() mientras que para la salida utilizarás de momento alert() o console.log()

let numeroA = parseInt(prompt("Ingrese el primer numero a sumar"));
let numeroB = parseInt(prompt("Ingrese el segundo valor"));

//funcion predeterminada

function suma (numeroA, numeroB){
    return numeroA + numeroB;
}

alert("El valor de la suma es: " + suma(numeroA, numeroB));

//arrow - mismo ej pero con resta

let resta = (numeroA, numeroB) => numeroA - numeroB;

alert("Restandolos arroja un valor de: " + resta(numeroA, numeroB));
//1er Funcion

//el () puede contener parametros
function saludo() {
    console.log("Hi everyone!!!!");
}
//llamado a la funcion
saludo();

//los parametros pueden ser receptores de datos externos a la funcion
//ej
function sum(a, b) {
    return a + b;
}
//ahora en base a lo q necesito, al param le paso argumentos:
let suma = parseInt(sum(5, 5)); // aca cada valor equivale a "a" y "b"
console.log(suma);

//permiten cumplir con el principio de NO repeticion DRY - dont repeat yoursealf
//tambien cumple con el principio KISS - keep it simple, stupid!!!

//los parametros son variables que se utilizan durante la realizacion de las funciones
//funcionan como placeholders (marca un posicion)

function nombreEdad(nombre, edad) {
    console.log("Hola mi nombre es ${nombre} y tengo ${edad} años");
}

nombreEdad("Tomás", 20);

//SCOPE - Determine el rango donde esta disp una variable (global o local)

//GLOBAL - Fuera de cualquier bloque o funcion

let color = "red";

function colorChange(){
    color = "blue";
}

colorChange();
console.log(color);

//LOCAL - Propia de un bloque o funcion

// function colorChangeEjemploLocal(){
//     color = "blue";
//     let auto = "BMW";
// }

//en este caso la var local es "auto" debido a que esta dentro de una funcion

//Funcion ANONIMA - no tiene nombre esp. y se puede usar para realizar referencias

const resta = function(a, b){
    return a - b;
}

console.log(resta(200, 100));

//Funcion ARROW - Formas concisas de escribir funciones anonimas

// const sumar = function(a, b) {
//     return a + b;
// };

const sumar = (a, b) => a + b; //arrow (=>) reemplaza a la palabra clave function, las llaves y return, simplificando codigo
console.log(sumar(8, 8)); 


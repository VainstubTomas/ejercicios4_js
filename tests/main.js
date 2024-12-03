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

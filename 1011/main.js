//Declara una variable llamada esPar y asígnale una función flecha que tome un número como parámetro y devuelva true si es par y false si es impar.

let a = parseInt(prompt("Ingrese un numero"));

let esPar = (a) => {
    if(Number.isInteger(a/2)){
        console.log("Es par");
    } else {
        console.log("Es impar");
    }
}

//Utiliza la función flecha almacenada en la variable esPar para determinar si un número ingresado por el usuario es par o impar e imprime el resultado en la consola.


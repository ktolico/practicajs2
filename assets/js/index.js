let arrreglo1 = [
    "chilaquiles",
    "tacos",
    "tostadas",
    "flautas",
    "enomoladas"
];



console.log(arrreglo1[0], "Posicion 0");
console.log(arrreglo1[1], "Posicion 1");
console.log(arrreglo1[2], "Posicion 2");
console.log(arrreglo1[3], "Posicion 3");
console.log(arrreglo1[4], "Posicion 4");

console.log(`La comida del dia es: ${arrreglo1[3]}`);

arrreglo1[4] = "quesadilla";

console.log(arrreglo1[4], "Nueva posicion 4");

console.log("mutacion de arreglo", arrreglo1);

// let nombreusuario = prompt("cual es tu nombre?");
// let apellidousuario = prompt("cual es tu apellido?");

// console.log(`El nombre del usuario es: ${nombreusuario} ${apellidousuario}`);

// arrreglo1[5]= nombreusuario +" "+ apellidousuario;

console.log(arrreglo1, "hay un nombre en lugar de comida");

console.log("el largo del arreglo es:", arrreglo1.length);
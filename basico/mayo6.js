// METODOS NUMBERS

//isNaN
const nan = 10 / "hola";
//console.log(isNaN(nan));
const parse = parseInt('abc');
//console.log(isNaN(parse));

//Math.abs()
const numE = -42;
//console.log(Math.abs(numE));

//Math.round() floor() ceil()
const NUMERO = 3.7;
// console.log(Math.round(NUMERO));
// console.log(Math.floor(NUMERO));
// console.log(Math.ceil(NUMERO));

// Math.max Math,min 
// console.log(Math.max(10, 200, 3));
// console.log(Math.min(10, 200, 3));

// Math.random()
let numero1 = Math.random() * 10;
// console.log(numero1);
//console.log(Math.floor(numero1));

// if

//if else

let apellido = "Rojas";

// if (apellido === "Rojas") {
//     console.log('es el apellido de Sofia');
// } else {
//     console.log('NOOOO es el apellido de Sofia');
// }

// expresion ternaria

let salida = apellido === "Gomez" ? 'es el apellido de Sofia TER' : 'NOOOO es el apellido de Sofia TER';
//console.log(salida);

// let numero2 = parseInt(prompt('Dime un numero: '));

// if (numero2 > 0) {
//     console.log('POSITIVO');
// } else if (numero2 === 0) {
//     console.log('ES CERO');
// } else { console.log('NEGATIVO'); }

// let numero2 = parseInt(prompt('Dime un numero: '));

let nombre5 = prompt('Escribe tu nombre');

if (nombre5 === 'Sofia') {
    console.log(`Hola ${nombre5}`);
} else if (nombre5 === 'JUAN') {
    console.log(`Hola ${nombre5}`);
} else { console.log(`Hola profesor`); }


alert('Hola Mundo');

// Truthy y Falsy

//Falsy= 0, null, undefined, []array vacio, {}objeto vacio, ""
//Truthy


// Funciones Recursivas
//prueba();

function prueba() {
    const valor = parseInt(prompt('dame un numero'));
    if (valor > 5) {
        prueba();
    }
    else {
        alert('Gracias');
    }
}

// Operador Rest

function varios(...args) {
    return args;
}
console.log(varios(5, 10, 20));

function listar(...a) {
    a.forEach(x => console.log(x));
}
listar('Sofia', 'Ana', 'Laura', 'Carla');

function descripcionP(nombre, edad, ...hobbies) {
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    console.log(`Hobbies: ${hobbies.join(', ')}`);
    console.log('los hobbies son:' + hobbies);
}

descripcionP('Juan', 41, 'Leer', 'Futbol', 'Cine');

// Operador Spread

const arreglo = [50, 70, 80];

function multiplicar(a, b, c) {
    return a * b * c;
}
console.log(multiplicar(arreglo));

const numeros = [1, 2, 3];
console.log(...numeros);

const original = [5, 6, 7, 100];
const copia = [...original];
console.log(copia);
const copia2 = original;
console.log(copia2);


const array1 = [1, 2, 3, 4];
const array2 = [4, 5, 6];
const concatenado = [...array1, ...array2];
console.log(concatenado);

// Spread en objetos
//  Copiar un objeto
const persona1 = { nombre: 'Luis', edad: 30 };

const copiaPersona1 = { ...persona1 };
console.log(copiaPersona1);


//Combinar objetos
const persona2 = { nombre: 'Juan', edad: 30 };
const detalles = { ciudad: 'Madrid', profesion: 'Ingeniero' };
const personaCompleta = { ...persona2, ...detalles };
console.log(personaCompleta); // { nombre: 'Juan', edad: 30, ciudad: 'Madrid', profesion: 'Ingen


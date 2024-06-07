const letras = "aabbccddeeff";

const letrasUnicas = letras.split("").reduce((cad, char) => cad.includes(char) ? cad : cad + char);

//console.log(letrasUnicas);

// Metodo join

let estrella = ['S', 'O', 'L'];
//console.log(estrella.join(""));

let numeros = [7, 8, 9];
//console.log(typeof numeros.join(""));


// OBJETOS

// CREACION DE OBJETO

let persona = {
    nombre: 'Sofia',
    apellido: 'Rojas',
    edad: 33,
    ciudad: 'Bogota',
    activo: true
};

// Acceso a las propiedades
// Notacion de punto
console.log(persona.nombre);
console.log(persona.activo);

// Notacion de corchetes
console.log(persona['apellido']);

// Creacion de una propiedad
persona.genero = 'F';

console.log(persona);

// Metodos en un Objeto. this

let persona2 = {
    nombre: 'Juan',
    saludar: function () {
        console.log(`Hola mi nombre es Sofia`);
    },
    saludarT: function () {
        console.log(`Hola soy ${this.nombre}`);
    }
};

persona2.saludarT()


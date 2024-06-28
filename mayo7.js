// if ANIDADO
let tipo = 'secundario';
let color = 'azul';

if (tipo === 'primario') {
    if (color === 'azul') {
        //console.log(`${color} 1 si es un color Primario`);
    } else {
        //console.log(`${color} 2 NO es un color Primario`);
    }
} else {
    if (color === 'verde') {
        //console.log(`${color} 3 si es un color Secundario`);
    } else {
        //console.log(`${color} 4 NO es un color Secundario`);
    }
}

// Truthy y Falsy

//Falsy= 0, null, undefined, ""
//Truthy = Todo lo que no es Falsy

// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// [], {} //** Aplica FALSY en algunos lenguajes (Python,Php,Swift,Ruby,Perl,Go,Rust,Kotlin,C# entre otros) en JS TS no aplica por la implantación del lenguaje, en Java los valores se toman estrictamente como false y true, en C y C++ se tomarían punteros nulos o estructuras de datos vacíos que se evaluarían como falsos o similar a falsy. En Javascript un objeto o array vacio siempre se evaluan truthy.

if ("") {
    //console.log('verdadero')
}

let arreglo = [];

let arregloLleno = [100, 300, 500, 1000];

//console.log(arregloLleno[2]);

// Metodos con Arrays
// push
arreglo.push(5);
arreglo.push(100);
arreglo.push(6456);
console.log(arreglo);
// lenght
console.log(arreglo.length);
// pop
let ultimo = arreglo.pop();
console.log(ultimo);
console.log(arreglo);
// shift
let primero = arreglo.shift();
console.log(primero);
console.log(arreglo);

// unshift
arreglo.unshift(50, 10);
console.log(arreglo);

// splice
// splice(indice, cantidad, elemento1, elemento2,  ...... elemento N)
arreglo.unshift(23, 54, 89, 555);
console.log(arreglo);
//arreglo.splice(2,2);
//console.log(arreglo);

//[23, 54,  89, 555,50, 10, 100]

//arreglo.splice(2,0,'a','b')
//console.log(arreglo);

arreglo.splice(2, 2, 'a', 'b');
console.log(arreglo);

// "información" array bidemensional, lo veremos mas adelante...
let arreglo2 = [['a'], ['c'], ['b']];
console.log(arreglo2[2][0]); //devuelve 'b'








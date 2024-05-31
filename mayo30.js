// METODOS DE ITERACION O DE ORDEN SUPERIOR forEach, map, filter, reduce
// forEach

//sintaxis: array.forEach(callback(valorActual, indice(opcional), array(opcional)))

const numeros = [1, 2, 3, 4, 5];
numeros.forEach(i => console.log(i));

console.log('*************');

const prueba = i => console.log(i);

prueba(numeros);

const validarPar = [3, 4, 8, 10, 15, 7];

validarPar.forEach(i => i % 2 === 0 ? console.log(i) : null);

console.log('*************');
/* function hfsghfklja(validarPar) {
    for (let i of validarPar) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
} */

/* const hfsghfklja = validarPar => {
    for (let i of validarPar) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
};
hfsghfklja(validarPar); */

// REDUCE

// Sintaxis: array.reduce(callback(acumulador, valor, index, array), valor Inicial).

const numbers = [1, 2, 3, 4, 5];
const suma = numbers.reduce((acc, v) => acc + v);
//const suma = numbers.reduce((acc, v) => acc + v, 0);
const sumInicial = numbers.reduce((acc, v) => acc + v, 10);

console.log(suma);
console.log(sumInicial);

const palabras = ['hola', 'mundo', 'sofia', 'JS', 'node'];
const unionPalabras = palabras.reduce((acc, v) => `${acc} ${v}`);
const unionPalabras2 = palabras.reduce((acc, v) => `${acc} ${v}`, 'Inicial:');
console.log(unionPalabras);
console.log(unionPalabras2);


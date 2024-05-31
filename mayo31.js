// map 

//sintaxis: array.map(callback(valorActual, indice(opcional), array(opcional)))

const numbers = [1, 2, 3, 4, 5];

//array.map(callback(valorActual, indice(opcional), array(opcional)) => {//cuerpo de la funcion})

const doble = numbers.map((valorActual) => valorActual * 2);
//console.log(doble);

const dobleT = numbers.map((va, i, a) => {
    va * 2;
    //console.log(i);
    //console.log(a);
});

// filter
// sintaxis: array.filter(callback(valorActual, indice(opcional), array(opcional)))

const numerosF = [1, 2, 3, 4, 5];
const filtrados = numerosF.filter(number => number > 3);

console.log(filtrados);

const names = ['Sofia', 'Juan', 'Ronald', 'Corina', 'Rocio', 'Laura', 'Luis', 'Sara'];

const nombresFl = names.filter(nombre => nombre[0] === 'S');
const nombresFl1 = names.filter(nombre => nombre.startsWith('S'));
console.log(nombresFl);
console.log(nombresFl1);

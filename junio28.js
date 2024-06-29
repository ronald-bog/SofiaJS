// Datos por Valor: Primitivos = inmutables (numbers, strings, bool, undefined, null...)

let a = 1;
let b = a;
//console.log(b);

b = 2;

console.log(a);
console.log(b);

let nom = 'Sofia';
let nom2 = nom;

console.log(nom2);
nom2 = 'Laura';
console.log(nom);
console.log(nom2);

// Datos por Referencia: Tipo objeto = Objetos, Arrays, Funciones...

let arreglo = [2, 4, 5];
let arreglo2 = arreglo;
//console.log(arreglo);
//console.log(arreglo2);

arreglo2.push(6);

console.log(arreglo);
console.log(arreglo2);

// Caso 1

const numbers = [1, 2, 3, 4, 5, 6];
const resultado = numbers.filter(num => num === 2);
console.log(resultado);
resultado[0] = 8;
console.log(numbers);
console.log(resultado);

// Caso 2
const tareas1 = [
    { id: 1, descripcion: 'Cantar', completada: false },
    { id: 2, descripcion: 'Estudiar', completada: false },
    { id: 3, descripcion: 'Programar', completada: false },
    { id: 4, descripcion: 'Lavar', completada: false },
    { id: 5, descripcion: 'Revisar', completada: false },
];

const nuevo = tareas1.filter(obj => obj.id === 3);

console.log(nuevo);

nuevo[0].completada = true;
console.log(tareas1);
console.log(nuevo);

// Caso 3

const arrayA = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]];
const filtro = arrayA.filter(num => num[0] === 2);
console.log(filtro);
filtro[0][1] = 10;
console.log(filtro);
console.log(arrayA);
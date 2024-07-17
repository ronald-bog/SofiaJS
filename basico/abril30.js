//undefinded
let y; //va a mostrar undefined
let x = "Hola";
x = 5
// TYPEOF (typeof)
//console.log(typeof x);

// null
let z = null;
console.log(typeof z);

//Symbol
let id = Symbol("id");
console.log(typeof id);

//Tipos de datos COMPUESTOS
//Array
//Objetos
//Funciones
//Date

var sol = "sol";
// ECMAScript 21 = ES21
console.log(sol);

// OPERADORES ARITMETICOS
// + - / * % incremento:++ decremento:--
let numero = 10;
numero--;
console.log(numero);

// OPERADORES ASIGNACION
const PRUEBA = 55; //Asignacion
let aS = 10; //Asignacion con suma +=
//aS = aS + 5;
aS += 5;
console.log(aS);

aS -= 2;
console.log(aS);
let a = 26;
let b = '26'
console.log('**************************************');
// OPERADORES COMPARACION 
console.log(10 == 9); //Igualdad, evalua solo valor NO tipo
console.log(a == b);
console.log(10 != 10); //Desigualdad
console.log(a === b); //Igualdad Estricta, evalua valor y tipo
console.log(999 > 100); //Mayor que
console.log(9 < 100); //Menor que
console.log(999 >= 100); // Mayor o igual que (> =)
console.log(100 <= 100);
console.log('**************************************');

// OPERADORES LOGICOS
// AND " && "
// OR " || "
// NOT " ! "

let num1 = 20;
let num2 = 84;
let num3 = 1001;
let num4 = 547;
console.log('**************************************');
console.log(num1 > num3 && num4 < num3); //false
console.log(num2 === num2 || num3 < num1); //true
console.log(num1 > num2 || num3 < num1);
console.log('**************************************');
console.log(!num3 > num2);
//

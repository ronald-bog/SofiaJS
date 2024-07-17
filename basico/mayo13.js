//CICLOS
// WHILE
// while (condicion){
//     Bloque de codigo a repetir
// }

/* let contador = 1;
while (contador <= 5) {
    console.log(contador);
    contador++;
} */

/* let index = 0;
let array = ['Sofia', 'Juan', 'Ronald', 'Corina', 'Malala'];
while (index < array.length) {
    console.log(array[index]);
    index++;
} */

// let numeroPar2 = 0;
// let cadena = "";
// while (numeroPar2 <= 20) {
//     if (numeroPar2 % 2 === 0) {
//         cadena += numeroPar2 + " ";
//     }
//     numeroPar2++;
// }
// console.log(cadena);

// let numeroPar2 = 0;
// let cadena = '';
// while (numeroPar2 <= 20) {
//     if (numeroPar2 % 2 === 0) {
//         cadena = cadena.concat(numeroPar2 + ' ');
//     }
//     numeroPar2++;
// }
// console.log(cadena)

// let arreglo = ["Phyton", "JavaScript", "Java", "C++", "PHP", "C#", "C", "Cobol", "TypeScript", "Perl", "Basic", "Pascal"];
// let indice = -1;
// let lenguaje;

// while (indice === -1) {
//     lenguaje = prompt("Dime un lenguaje de programación:");
//     indice = arreglo.indexOf(lenguaje);
// }

// alert(`Escribiste la opción ${lenguaje}`);

// let arreglo = ["Phyton", "JavaScript", "Java", "C++", "PHP", "C#", "C", "Cobol", "TypeScript", "Perl", "Basic", "Pascal"];
// let lenguaje;
// while (!arreglo.includes(lenguaje)) {
//     lenguaje = prompt("Dime un lenguaje de programación:");
// }
// alert(`Escribiste la opción ${lenguaje}`);

//DO WHILE
// do {
//      codigo a ejecutar
// } while (condicion);

/* let password;

do {
    password = prompt('Por favor, ingrese una contraseña');
} while (password !== 'secreto'); */

let password;
while (password !== 'secreto') {
    password = prompt('Por favor, ingrese una contraseña');
}


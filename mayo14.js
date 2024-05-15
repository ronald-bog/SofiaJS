// let suma = 0;
// let continua;

// do {
//     let numero = parseInt(prompt('Por favor ingrese un numero:'));
//     suma += numero;
//     continua = prompt('Desea ingresar otro numero? (s/n)').toLowerCase();
// } while (continua === "s");

// alert(`La suma de los numeros es: ${suma}`);

// let suma = 0;
// let continua = 's';

// while (continua === "s") {
//     let numero = parseInt(prompt('Por favor ingrese un numero:'));
//     suma += numero;
//     continua = prompt('Desea ingresar otro numero? (s/n)').toLowerCase();
// }

// alert(`La suma de los numeros es: ${suma}`);

// Si ejecuto una sola instruccion no necesito llaves {}, de lo contario
// if (false) console.log('Hola Mundo!!!');
// else console.log('Hola Mundo else!!!');

// BUCLE FOR **********

// let nombres = ['Ana', 'Juan', 'Maria', 'Carlos', 'Sofia'];
// for (let i = 0; i < nombres.length; i++) {
//     console.log(`Nombre  ${i + 1}: ${nombres[i]}`);
// }

// for (let i = 0; i < 5; i++) {
//     console.log("a");
// }

let devs = ['Python', 'Javascript', 'Java'];
for (let pepito in devs) {
    console.log(`${pepito} - ${devs[pepito]}`);
}



const carro = {
    marca: "Renault",
    cilindraje: '1600',
    puertas: 5,
    acccesorios: ['Radio', 'Exploradoras', 'Sunroof'],
    encender() {
        console.log('Estoy encendido');
    }
};
const conversion = JSON.stringify(carro);


// commonJS
const fs = require('fs');

// module ES6, mjs o package.json
// import fs from 'fs'

// Guardar archivo - Async

//fs.writeFile('./a/prueba2.json', conversion, () => { });

// fs.writeFile('./prueba2.json', conversion, () => {
//     console.log('Archivo guardado exitosamente');
// });

// fs.writeFile('./a/prueba2.json', conversion, (err) => {
//     if (err) {
//         console.log(err.errno);
//         return;
//     }
//     console.log('Archivo guardado exitosamente');
// });

// console.log('Proceso despues de la linea de escritura');


// Guardar Sincrono
guardar();

function guardar() {
    try {
        fs.writeFileSync('./a/prueba2.json', conversion);
        console.log('Archivo guardado exitosamente');
    } catch (error) {
        console.log('Archivo NO guardado');
    }
}

console.log('Proceso despues de la linea de escritura');


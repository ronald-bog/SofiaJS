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

fs.writeFile('./a/prueba2.json', conversion, () => { });
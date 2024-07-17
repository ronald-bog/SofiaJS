// ES Module - module ES6 - module
import fs from 'fs';

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

/* fs.writeFile('./prueba2.json', conversion, (err) => {
    if (err) {
        console.log(err.errno);
        return;
    }
    console.log('Archivo guardado exitosamente');
}); */

// Leer Sincrono

// sin manejo de error o exito
/* const archivoObtenido = fs.readFileSync('./prueba2.json', 'utf8');

console.log(archivoObtenido);

const auto = JSON.parse(archivoObtenido);

console.log(auto); */

// Manejo de error o exito

let archivoObtenido;

try {
    archivoObtenido = fs.readFileSync('./prueba.json', 'utf8');
    console.log('Carga Exitosa');
} catch (error) {
    console.log(error);
    console.log('Se genero Error');
}

const archivoNuevo = JSON.parse(archivoObtenido);

console.log(archivoNuevo);







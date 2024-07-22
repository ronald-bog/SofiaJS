import fs from 'fs';

let archivoJson;
fs.readFile('./prueba2.json', 'utf8', (err, data) => {
    if (err) {
        console.log('Salio error');
        return;
    }
    archivoJson = data;
});

setTimeout(() => {
    console.log(archivoJson);
}, 5000);



// setTimeout
/* setTimeout(() => {
    console.log('Tiempo finalizado');
}, 5000);

function mensaje(nom) {
    console.log('Tiempo finalizado ' + nom);
}

// mensaje('Sofia');

setTimeout(mensaje, 5000, 'Sofia');

const tiempo = (fx, n) => setTimeout(fx, 4000, n);

tiempo(mensaje, 'Sofia'); */


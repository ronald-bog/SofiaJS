import fs from 'fs';

// Async

const archivoJson = fs.readFile('./prueba2.json', 'utf8', (err, data) => {
    if (err) {
        console.log('Salio error');
        return;
    }
    return data;
});

console.log(archivoJson);


let dataN;

fs.readFile('./prueba2.json', 'utf8', (err, data) => {
    if (err) {
        console.log('Salio Error');
        return;
    }
    dataN = data;
});


console.log(dataN);



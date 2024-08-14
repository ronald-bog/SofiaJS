//* Top-level await: Es module, Node 14.8 o superior

const animales = ['gato', 'perro', 'pajaro', 'ardilla', 'conejito'];

function mostrarArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(animales);
        }, 4000);
    });
}

const animales2 = await mostrarArray();
// console.log(animales2);

/* console.time('tiempo');

function prueba() {
    setTimeout(() => {
        console.log('Demostracion');
        console.timeEnd('tiempo');
    }, 3000
    );
} */


/* function prueba1() {
    setTimeout(() => {
        console.log('Prueba1');
    }, 5000
    );
}

function prueba2() {
    setTimeout(() => {
        console.log('Prueba2');
    }, 3000
    );
} */

// prueba1();
// prueba2();

/* console.time('time');
function prueba1() {
    return new Promise(res => {
        setTimeout(() => {
            console.log('Prueba1');
            res();
        }, 5000);
    });
}

function prueba2() {
    return new Promise(res => {
        setTimeout(() => {
            console.log('Prueba2');
            res();
        }, 3000);
    });
}

prueba1();
await prueba2();
console.timeEnd('time'); */
import fs from 'fs';

function lecturaJson() {
    const resultado = new Promise((res, rej) => {
        fs.readFile('./prueba2.json', 'utf8', (err, data) => {
            if (err) {
                console.log('Salio error');
                rej(err);
            }
            res(data);
        });
    });
    return resultado;
}

/* lecturaJson()
    .then(res => console.log(res))
    .catch(err => console.log('Esto es error:\n' + err)); */

/* async function leer() {
    const nuevo = await lecturaJson();
    console.log(nuevo);
} */

async function leer() {
    try {
        const nuevo = await lecturaJson();
        console.log(JSON.parse(nuevo));
    } catch (error) {
        console.log('Esto es error:\n' + error);
    }
}

leer();

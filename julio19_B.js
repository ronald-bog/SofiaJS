// exportacion con ES module

/* export const nombre = 'Laura';

export function saludar() {
    console.log('Hola desde la funcion saludar');
} */

const nombre = 'Laura';

function saludar() {
    console.log('Hola desde la funcion saludar');
}

export default {
    nombre,
    saludar
};



// exportacion con commonJS

/* const nombre = 'Laura';

function saludar() {
    console.log('Hola desde la funcion saludar');
}

module.exports = {
    nombre,
    saludar
}; */


/* exports.nombre = 'Laura';

exports.saludar = function () {
    console.log('Hola desde la funcion saludar');
}; */

/* const back2 = {
    nombre: 'Laura',
    saludar() {
        console.log('Hola desde la funcion saludar');
    }
};

module.exports = {
    back2
}; */
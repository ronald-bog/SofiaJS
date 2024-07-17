//FUNCIONES ***************************************
// Funciones declaradas.
// son Hoisted

// Definicion de la funcion

// funcion Void
function saludar() {
    console.log('Hola Sofia');
}

// Invocacion o llamar la funcion
saludar();

let comprobacionV = saludar();

console.log(saludar());

// Funcion con Retorno

function saludarR() {
    return 'Hola Sofia';
}

let comprobacionR = saludarR();

console.log(comprobacionR);
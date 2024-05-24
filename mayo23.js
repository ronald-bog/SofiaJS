// funcion VOID con parametros

function saludarP(pepito) {
    console.log(`Hola, ${pepito}`);
}

saludarP('Sofia');
saludarP(); // imprime el mensaje pero con undefined

// function con retorno y con parametros

function saludarRP(x) {
    return `Hola, ${x}`;
}

let msj = saludarRP('Juan');

console.log(msj);
console.log(saludarRP('Juan'));

// function con retorno y con varios parametros

function sumarRPV(x, y, z) {
    return x + y + z;
}

console.log(sumarRPV(100, 200, 500));
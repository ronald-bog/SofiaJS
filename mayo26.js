// Desempaquetar o desestructurar un array.

const fulanito = [10, 20, 30];

const [a, b, c, d] = fulanito;

//console.log(a);
//console.log(b);
//console.log(c);
//console.log(d);
//console.log(fulanito);

// Alcance de las variables o Scope
// Global

let nombre, apellido, apodo;

let mensaje = 'Como estas';

function globalF() {
    console.log(mensaje);
}
//globalF();

function name1() {
    let local = 'Dentro de la funcion';
    return local;
}
//console.log(name1());

//console.log(local);

// Retotorno de multiples valores en una funcion.
function acceso() {
    const v1 = 1;
    const v2 = 2;
    return [v1, v2];
}

console.log(acceso());
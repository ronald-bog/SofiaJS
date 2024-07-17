// Retotorno de multiples valores en una funcion.
function acceso() {
    const v1 = 115;
    const v2 = 223;
    return [v1, v2];
}

console.log(acceso());
const [n1, n2] = acceso();
console.log(n1);
console.log(n2);

// No recomendado ***
let valor1;
let valor2;

function multiples() {
    valor1 = 'asignacion v1';
    valor2 = 'asignacion v2';
}
multiples();
console.log(valor1);
console.log(valor2);
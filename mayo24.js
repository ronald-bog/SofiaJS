// FUNCIONES EXPRESIVAS
const saludo = function () {
    return 'Hola funcion expresiva';
};
//console.log(saludo());

const suma = function () {
    let num1 = 5 + 6;
    return num1;
};
//console.log(suma());

const vacia = function () {
    console.log('Mensaje de la funcion vacia expresiva');
};
vacia();
//console.log(vacia());

const nombre = function (n) {
    //console.log(`Hola como estas ${n}`);
};
nombre('Juan');
//console.log(nombre('Juan'));

// FUNCIONES FLECHA (Arrow functions)

const flecha = () => {
    //console.log('Funcion Flecha');
};
flecha();

const flecha2 = () => console.log('Funcion Flecha');
flecha2();

const flecha3 = (num1) => {
    return num1 + num1;
};
//console.log(flecha3(8));

const flecha4 = num1 => num1 + num1;
//console.log(flecha4(8));

const flecha5 = (n1, n2) => n1 + n2;
//console.log(flecha5(20, 30));

const flecha6 = (nm1, nm2) => {
    console.log('Dos expresiones');
    return nm1 + nm2;
};
console.log(flecha6(40, 60));


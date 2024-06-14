const lenguaje = {
    nombre: 'javaScript',
    tipado: 'Dinamico',
    framework: 'React'
};

//* Object.values()
let values = Object.values(lenguaje);
console.log(values);

//* Object.entries()
let entries = Object.entries(lenguaje);
console.log(entries);

//console.log(entries[1][1]); acceso a 'Dinamico'

//* Desestructuracion de Objetos

const pc = {
    procesador: 'amd',
    velocidad: '3.9 Ghz',
    ram: '16 Gb',
    tarjeta_video: false
};

const { procesador, ram } = pc;
const { procesador: pro, ram: r } = pc;
console.log(pro);
console.log(r);

// Desestructuracion Objetos Anidados

const departamento = {
    valle: {
        capital: 'Cali',
        superficie: 22195,
    },
    antioquia: {
        capital: 'Medellin',
        superficie: 63612,
    }
};

const { antioquia: { capital, superficie } } = departamento;
const { antioquia: { capital: c, superficie: s } } = departamento;
console.log(c);
console.log(s);

//* Desestructuracion para pasar onjeto como argumento

const user = {
    id: 101,
    name: 'Carlos',
    password: 'jkhfiwe44'
};

function validar(objeto) {
    const { id, name } = objeto;
    console.log(id, name);
}

validar(user);

function valida({ id, name }) {
    console.log(id, name);
}

valida(user);

const validador = ({ id, name }) => console.log(id, name);
validador(user);

//* Desestructuracion en arreglos, seleccionando lo que quiero desestructurar

const frameworks = ['React', 'Node', 'Express', 'Angular', 'Vue', 'Next', 'Nest', 'Svelte'];

const [, , e, an, vue, , , sv] = frameworks;

console.log(e);
console.log(an);
console.log(vue);
console.log(sv);

//* Desestructuracion con operador Rest ...

const [, , ...frame] = frameworks;
console.log(frame);


// PROFUNDIZACION FUNCIONES

// Retorno condicionado

function edad(e) {
    if (e >= 18) {
        return 'Eres mayor de edad';
    }
    else {
        return 'NO Eres mayor de edad';
    }
}
const edadF = edad(18);

console.log(edadF);


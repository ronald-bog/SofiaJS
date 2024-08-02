const alumnos = [
    {
        nombre: 'Sofia',
        apellido: 'Rojas',
        nota: 4.5
    },
    {
        nombre: 'Carlos',
        apellido: 'Sanchez',
        nota: 3.9
    },
    {
        nombre: 'Mateo',
        apellido: 'Lopez',
        nota: 3.1
    }
];

/* function mostrarArrayP() {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(alumnos);
        }, 5000);
    });
    return promesa;
} */

function mostrarArrayP() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(alumnos);
        }, 5000);
    });
}

//* async await
async function obtenerArray() {
    const nuevo = await mostrarArrayP();
    console.log(nuevo);
}

obtenerArray();
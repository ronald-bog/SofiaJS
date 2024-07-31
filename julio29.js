//! PROMESAS

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

function mostrarArray() {
    setTimeout(() => {
        return alumnos;
    }, 5000);
}

//mostrarArray();

//console.log(mostrarArray());

const pepito1 = 5;

function mostrarArrayP() {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(alumnos);
        }, 5000);
    });
    return promesa;
}

//console.log(mostrarArrayP());

//* then catch
mostrarArrayP()
    .then(res => console.log(res))
    .catch(err => console.log(err));

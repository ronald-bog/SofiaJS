// Se termina de realizar el ejericio propuesto
// Resultados

const qty = parseInt(prompt('Cuantos registros desea ingresar:'));
const names = [], ratings = [];
for (let i = 0; i < qty; i++) {
    const [name, score] = prompt('Digita nombre y calificacion separada por guion (-):').split('-');
    names.push(name);
    ratings.push(parseInt(score));
}

function avg() {
    let suma = 0;
    ratings.forEach(i => suma += i);
    return suma / qty;
};

// usando reduce
//const avg = ratings.reduce((ac, i) => ac + i) / qty;

const msg = (names, ratings) => {
    let approved = '';
    ratings.forEach((rating, i) => rating >= 60 ? approved += `${names[i]}: ${rating}\n` : '');
    return `El promedio de calificaciones es: ${avg()}\n\nEstudiantes aprobados:\n${approved}`;
};

// usando map
// const msg = (names, ratings) => {
//     let approved = ratings.map((rating, i) => rating >= 60 ? `${names[i]}: ${rating}\n` : '').join('');
//     return `El promedio de calificaciones es: ${avg}\n\nEstudiantes aprobados:\n${approved}`;
// };

alert(msg(names, ratings));

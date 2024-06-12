// Alcance de variables y propiedades

let marca = 'Mazda';

const carro = {
    marca: 'Renault',
    year: 2018,
    color: 'Rojo',
    describir: function () {
        console.log(`El carro es marca ${marca} y color ${this.color}, el año de fabricacion es ${this.year}`);
    }
};

//carro.describir();

console.log(carro.marca);


// Recorrer un Objeto
for (let iteracion in carro) {
    console.log(`${iteracion} = ${carro[iteracion]}`);
}

// Metodos para los objetos.

// Object.keys. Devuelve un array con las claves de mi objeto

let keys = Object.keys(carro);

console.log(keys);


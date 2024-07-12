// JSON

const carro = {
    marca: "Renault",
    cilindraje: '1600',
    puertas: 5,
    acccesorios: ['Radio', 'Exploradoras', 'Sunroof'],
    encender() {
        console.log('Estoy encendido');
    }
};

// Nombre del modulo
JSON;

// Convertir Objeto a JSON
const conversion = JSON.stringify(carro);
console.log(conversion);
//console.log(carro);

// Convertir JSON a Objeto

//console.log(JSON.parse(conversion));

let cualquierCosa = `{"marca":"Renault","cilindraje":"1600","puertas":5,"acccesorios":["Radio","Exploradoras","Sunroof"]}`;
console.log('******************');
//console.log(JSON.parse(cualquierCosa));

const moto = JSON.parse(cualquierCosa);

/* console.log(typeof moto);
console.log(moto);

carro.encender(); */

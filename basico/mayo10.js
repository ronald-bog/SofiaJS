// indexOf
let arregloNombres = ['Ana', 'Luis', 'Jorge', 'Carlos', 'Sofia'];
let nombreABuscar = 'Ana';
let indice = arregloNombres.indexOf(nombreABuscar);
//console.log(indice);

// slice
let arreglo = [1, 2, 3, 4, 5]

let subArray = arreglo.slice(1,4);
//console.log(subArray);

let subArray2 = arreglo.slice(2);
//console.log(subArray2);

let subArray3 = arreglo.slice();
//console.log(subArray3);

// SWITCH

let diaSemana = 10;

let mensaje;

switch (diaSemana){
    case 6:
        mensaje = 'Hoy es lunes';
        break;
    case 7:
        mensaje = 'Hoy es martes';
        break;
    case 8:
        mensaje = 'Hoy es miercoles';
        break;
    default:
        mensaje = 'OTRO DIA';
}

//console.log(mensaje);

let frutas = 'Pera';

switch (frutas){
    case 'Pera':
        console.log('Elegiste Pera');
        break;
    case 'Manzana':
        console.log('Elegiste Manzana');
        break;
    case 'Banano':
        console.log('Elegiste Banano');
        break;
    default:
        console.log('Elegiste Durazno');
}





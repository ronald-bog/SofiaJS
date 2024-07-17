// NPM (Node Package Manager)
// NODEMON
// LIVE SERVER

//METODOS PARA LOS STRINGS

// length
const FRASE = 'Hola Mundo';
console.log(FRASE.length);

const FRASE2 = 'CURSO DE JAVASCRIPT'
console.log(FRASE2[0]);
console.log(FRASE2.charAt(1));
//indices

const saludo = 'hola';
const nombre = 'Sofia';
console.log(saludo.concat("+ ", nombre));

// indexOf
const FRASE3 = 'Buenas, tardes';
console.log(FRASE3.indexOf('tardes'));

const FRASE4 = 'Buenos dias';
console.log(FRASE4.substring(7, 11));

const FRASE6 = 'sofia';
console.log(FRASE6.toLocaleUpperCase());

const FRASE7 = '  Ronald '
console.log(FRASE7);
console.log(FRASE7.trim());

const FRASE8 = 'Buenas&noches';
console.log(FRASE8.split("&"));

const FRASE9 = 'Como estas';
console.log(FRASE9.replace("estas","vas"));

// METODOS NUMBERS

const num = 9;
console.log(typeof num);
const numTS = num.toString();
console.log(numTS);
console.log(typeof numTS);

const numA = '10';
console.log(parseInt(numA));
console.log(typeof parseInt(numA));


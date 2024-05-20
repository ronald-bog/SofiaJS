//VALORES ASCII

let numero = 'a';
//console.log(numero.charCodeAt());

let code = 66;
//console.log(String.fromCharCode(code));

let letra = 'A';
console.log("a" > 10); // este tipo de expresion en JS devuelve false porque el carcater es tomado como NaN, en otros lenguajes como por ejemplo C o C++ realizaria la conversion segun ASCII

let array = [1, 2, 3, 4, 5];
array.datosDelArray = 'Es de numeros';

for (let i in array) {
    if (array.hasOwnProperty(i)) {
        console.log(array[i]);
    }
}


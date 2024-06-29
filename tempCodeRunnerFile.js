const arrayA = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]];
const filtro = arrayA.filter(num => num[0] === 2);
console.log(filtro);
filtro[0][1] = 10;
console.log(filtro);
console.log(arrayA);
/*Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale
sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2,
3] y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]*/

//1 - defino los array
let arrayUno = [1, 2, 3];
let arrayDos = [4, 5, 6];

let A = 10; 
let B = 12;

//pasasr por referencia
arrayUno = arrayDos;

//clono valores con rrest o spred ...
let arrayTres = [...arrayDos];

arrayUno[1] = 10;

let resultado = [];

// relleno el nuevo array
for (let i = 0; i < arrayUno.length; i++) {
    resultado.push(arrayUno[i]);
    resultado.push(arrayDos[i]);
}

let grupo = arrayUno.concat(arrayDos);

//limpio los arrays originales
arrayUno = [];
arrayDos = [];

//muestro por consola
console.log(arrayUno);
console.log(arrayDos);
console.log(resultado.toString());


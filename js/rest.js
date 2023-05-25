//1 - defino los array
let arrayUno = [1, 2, 3];
let arrayDos = [4, 5, 6];

//pasar por valor
let A = 10; 
let B = 12;

//pasar por referencia, son el mismo
arrayUno = arrayDos;

//clono valores con rest o spred ... solo los valores
let arrayTres = [...arrayDos];

arrayUno[1] = 10;
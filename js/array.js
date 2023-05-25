//funciones de arrays
let fruta = ['naranja','manzana','mango'];

console.log(fruta);

//muestra la extension del array
console.log(fruta.length);

//mostrar en formato string
console.log(fruta.toString());
console.log(fruta.join('--/--'));

//add nuevos elementos al array
fruta[3] = 'cereza';
console.log(fruta);

fruta.push('sandia');
console.log(fruta);

fruta.pop();
console.log(fruta);

console.log(fruta.reverse());

let dias = "lunes,martes,miercoles,jueves,viernes";
let newArray = dias.split(',');
console.log(newArray);
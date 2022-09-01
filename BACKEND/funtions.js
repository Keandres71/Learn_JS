/* let-> Regional
const-> No va a cambiar  */

// FUNCION ANONIMA (Las almacenamos en una variable) --> se pueden pasar estas funciones como parametros a otras funciones
const anonima = function(){ // SIN PARAMETROS
    console.log('Funcion Anonima');   
}
const fn = anonima();


// FUNCIONES FLECHA
const sumaC = (z,m) => {
    return z + m;
};
const resultadoC = sumaC(5,5);
console.log(resultadoC);


// Funcion flecha (un solo parametro, se elimina los parentesis)
const one = cadena1 => {
    console.log(cadena1);
}
one('one_piece');


// Funcion super flecha (Para retornar pocos parametros, *Es un return implicito)
const nombre = nombre1 => ('Personaje: '+ nombre1);
console.log(nombre('Roronroa Zoro'));


const multx2 = num0 => num0 * 2;
const jaja = multx2(34);
console.log(`AK${jaja}`);

 
const div = (p,o) => p / o; // Con mas parametros
const jeje = div(12,6);
console.log(jeje);



// Funcion con return
function restar(num3, num4) {
    return (num3 - num4);
}
let menos = restar(9,2);
console.log("La resta de: " + menos);

// Template string
let concatenar = (num6, num7) => (
     `El numero es: ${num6 - num7}`);

let c = concatenar(8,5);
console.log(c);

const number = 72;
console.log(`Mi numero fav es: ${number}`);

// UTILIZAR SIEMPRE  EL OPERADOR DE COMPARACION ESTRICTO ( === )
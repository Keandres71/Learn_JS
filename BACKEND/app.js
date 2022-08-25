/* 
Javascript

1. Dinamico = cambian las variables en tiempo de ejecucion
2. Tipado = Es de tipado debil, no hay que especificar el tipo de dato para crear una variable
3. Tipos de datos = 
Primitives = (Se comparan por valor), 
objects (Se  comparan por referencia), dos cajas con el mismo valor adentro, no dejan de ser cajas diferentes
functions
*/



// SCRIPT PARA LEVANTAR SERVIDOR (CON EXPRESS)
/* const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Serve up');
});

app.get('/', (req,res) => {
    res.send('DANIELA TE AMO MI AMOR');
});
 */

// OTRA MANERA DE LEVANTAR UN SERVIDOR
const http = require('http');

const server = http.createServer((req,res) => {
    res.status = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
});

server.listen(3000); // CON IP DE RED LOCAL ( http://192.168.0.15:3000/ )
console.log("Servidor up");
 




/* let-> Regional
const-> No va a cambiar  */

let mensaje='Hola NodeJS';
console.log(mensaje);

// Funcion normal
function hunter(cadena){
    console.log(cadena); 
}
hunter('Hunter x Hunter');



// FUNCION ANONIMA (Las almacenamos en una variable) --> se pueden pasar estas funciones como parametros a otras funciones
const anonima = function(){ // SIN PARAMETROS
    console.log('Funcion Anonima');   
}
const fn = anonima();


const setSaludo = function(name){
    return `Hola ${name} bienvenido`;
};

const getSaludo = function(mensaje){
    console.log(mensaje)
};

const saludar = function(set, get){
    const name1 = set("Robert Lewandowski");
    get(name1); 
};

saludar(setSaludo, getSaludo);


// FUNCIONES FLECHA
const sumaC = (z,m) =>{
    return z + m;
};
resultadoC = sumaC(5,5);
console.log(resultadoC);


// Funcion flecha (un solo parametro, se elimina los parentesis)
const one = cadena1 =>{
    console.log(cadena1);
}
one('one_piece');


// Funcion super flecha (Para retornar pocos parametros, *Es un return implicito)
const nombre = nombre1 => ('Personaje: '+ nombre1);
console.log(nombre('Roronroa Zoro'));


const multx2 = num0 => num0 * 2;
jaja = multx2(34);
console.log(`AK${jaja}`);

 
const div = (p,o) => p / o; // Con mas parametros
jeje = div(12,6);
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









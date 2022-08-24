//ARRAYS
// Listas de elementos
// se recomienda que los arrays sean del mismo tipo de dato

const compañeros = [ 
    'Kevin Quiroga',
    'Minero Sanchez',
    'Desarrollo util'
]

console.log(compañeros.length); // Ver la cantidad de datos del array
compañeros[1] = 839238;     // Asignar valor diferente
compañeros.splice(1,0,'Splice'); // Agrega dato en el indice deseado

compañeros.push('Minudev'); //Agrega dato al final      
compañeros.pop();           //Elimina ultimo dato

compañeros.unshift('PasionSur'); // Agrega dato al principio
compañeros.shift();         //Elimina primer dato
console.log(compañeros);



const numbers = ['cero','uno', 'dos', 'tres'];


// NO RETORNA NADA, REALIZA UNA ACCION
numbers.forEach((elemento,indice,array) => {    
    console.log(elemento, indice * 2);
})
/*       */

// map (Retorna valor resultante)
let numbersTwo = [2,5,7,9]; 

/* numbersTwo = numbersTwo.map(dato => dato * 6);
console.log(numbersTwo); */

const forSeven = numbersTwo.map(dato => dato * 7);
console.log(forSeven);
console.log(numbersTwo);


/*      */

const factura = [
    {
        precio: 2000,
        cantidad: 2
    },
    {
        precio: 4000,
        cantidad: 3
    },
    {
        precio: 1000,
        cantidad: 4
    }
];

let compra = factura.map(elemento => elemento.precio * elemento.cantidad);
console.log(compra);

// .reduce (Transforma un array a un solo valor, operaciones dentro de un array)  * (Un map viene junto con un reduce   )
// un contador que realiza una operacion sobre cada uno de los valores del array(Tienen que ser valores simples para calcular)
const totalVenta = compra.reduce((a,b) => a + b);
console.log(`El total por los tres productos es: ${totalVenta}`);

let figlet = require('figlet');

figlet('LEO MESSI', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

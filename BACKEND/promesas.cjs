const fetch = require('node-fetch-with-proxy');


//import fetch from 'node-fetch';

//             PROMESAS 
// LAS PROMESAS SIEMPRE RETORNAN ALGO (las promesas son un objeto)
// resolve = resuelve la promesa, reject = rechaza la promesa

const players = [
     {
          name: 'Leo Messi',
          club: 'PSG',
          nacionalidad: 'Argentina'
     },
     {
          name: 'Cristiano Ronaldo',
          club: 'Manchester United',
          nacionalidad: 'Portugal'
     },
     {
          name: 'Neymar Junior',
          club: 'PSG',
          nacionalidad: 'Brasil'
     }
];

const getDatos = () => {
     return new Promise((resolve,reject) => { //Parametros para promesa (es una convencion)
          if(players.length === 0){
               return reject(new Error('No existen datos')); 
          }
          setTimeout(() => {
               return resolve(players);
          }, 10000)
     });
}


// ASYNC AWAIT (Mejor opcion)
async function getPlayers(){
     try {
          const fetchPlayers = await getDatos();
          console.log(fetchPlayers);
     } catch (err) {
          console.log(err.message);
     }
}

getPlayers();
 
/*           */

//  THEN Y CATCH (En algunos casos suele ser mejor)
const messiBest = true;
const validatorTheBest = new Promise((resolve, reject) => {
     if(!messiBest === false ){
          return resolve('Messi es el Mejor');
     }else{
          return reject('No sabes de futbol');
     }
});

validatorTheBest
.then(res => {
     console.log('Succcess: ' + res);   //validatorTheBest().then(resolve).catch(reject)
})
.catch(error => {
     console.log('Error: ' + error);
})


/*           */

let t = 9;
const juro = new Promise((resolve, reject) => {
     setTimeout(() => {
          if(t <= 10){
               t = t * 9 + 9;
               console.log('2. Proceso finalizado');
               return resolve(t);// return Para que pare la ejecucion (Por si solo no para el flujo)
          }else{
               return reject(); // Para que funcione el catch (si paso algun parametro, lo paso tambien en el catch o tambien then)
          }
     }, 5000);
});
console.log('1. Iniciando proceso');


juro.then( respuesta => {
     console.log('3. El resultado es: ' + respuesta); // Cuando obtenga la promesa ejecutar la esta linea del then
}).catch( () => {
     console.log('Hay un error en la ejecucion del programa');
});



//CALLBACK    (Pasar funcion como parametro a otra funcion)
console.log(1);

const num2 = (callbak) => { // Parametro
     setTimeout(() => {
          console.log(2);
          num3();
     }, 7000);
}

const num3 = () => {
     console.log(3);
}

num2(num3);


// fetch() = Consume url (API) para traer datos


// Manera con .then()

//const link = 'https://jsonplaceholder.typicode.com/posts';
/*
fetch(link)
  .then(response => response.json())
  .then(json => console.log(json))
 */

  const api = async(link) => {
     const response = await fetch(link); // fetch = Para consumir api externa
     console.log(response); // retorna un objeto 'response' (big file)
     const data = await response.json();
          console.log(data);
}

api('https://rickandmortyapi.com/api/character/121');





const apiRick = async() => {
     const response = await fetch('https://rickandmortyapi.com/api/character/497');
     const hologram = await response.json();
     console.log(hologram);
}

apiRick();



// Parse = Convertir un texto plano en formato JSON
const filesJson = `{
     "playersWithBallonsGold":  [
 
         {
             "name":"Leo Messi",
             "clubActual": "PSG",
             "manyBallons":7,
             "clubs":[
                 "FC Barcelona"
             ]
         },
         {
             "name":"Cristiano Ronaldo",
             "clubActual": "Manchester United",
             "manyBallons":5,
             "clubs":[
                 "Sporting FC",
                 "Real Madrid",
                 "Juventus"
             ]
         }
     ]
 }`;
console.log(typeof filesJson); // string

const parseTheBests = JSON.parse(filesJson); // debe estar bien escrito la estructura que se pasa
console.log(parseTheBests);



     // ARRAYS DE PROMESAS
const promise1 = fetch("https://rickandmortyapi.com/api/character/476")
 .then((r) => r.json())
 .then((data) => data); 

 const promise2 = fetch("https://rickandmortyapi.com/api/character/445")
 .then((r) => r.json())
 .then((data) => data);

 const promise3 = fetch("https://rickandmortyapi.com/api/character/567")
 .then((r) => r.json())
 .then((data) => data);
 
 
 // Retorna un array si se resuelven todas las promesas
 const personajes = Promise.all([promise1, promise2, promise3])
     .then(allData => console.log(allData));


// Retorna array con estado (correcto o incorrecto)
const personaje2 = Promise.allSettled([promise1,promise2,promise3])
     .then(allData2 => console.log(allData2));

// Retorna array con la primera promesa en cumplirse, sin que retorne un error    
const personaje3 = Promise.any([promise1,promise2,promise3])
     .then(anyy => console.log(anyy));
     
//Retorna array con la primer promesa cumplida
/* const personaje4 = Promise.race([promise1,promise2,promise3])
     .then(firstResolve => console.log('Primero en resolverse: ' + firstResolve.name));

 */


     // DESTRUCTURING = Para asignar a unas variables los valores de un ARRAY
const posicionesFifa = ['PO', 'DF', 'MC', 'DC'];

const [portero, defensa, medioCentro, delantero] = posicionesFifa;

console.log(medioCentro, defensa);

const puerta = {
     color: 'Negra',
     cerradura: true,
     ancho: '2m',
     alto: '3.5m'
}

const {color,cerradura, ...medidas} = puerta;
console.log(medidas);



     //MODULES [require, module.exports] = CommonJS
/* const juegoManos = require("./Loops.js"); 
//juegoManos.tru();
console.log(juegoManos.game('PAPEL', 'PIEDRA')); */
console.clear();
const fetch = require('node-fetch-with-proxy');

fetch('https://rickandmortyapi.com/api/character/666')
  .then(res => res.json())
  .then(json => console.log(`ID PERSONAJE ${json.id}: NAME: ${json.name}`))
  .catch(failed => console.log(new Error(`Es un error en el tiempo de carga de la API Fetch ${failed}`)));


  const eyeholeMan = `{
    "id":121,
    "name":"Eyehole Man",
    "status":"Alive",
    "species":"Alien",
    "type":"",
    "gender":"Male",
    "origin":{
        "name":"unknown",
        "url":""
    },
    "location":{
        "name":"Interdimensional Cable",
        "url":"https://rickandmortyapi.com/api/location/6"
    },
    "image":"https://rickandmortyapi.com/api/character/avatar/121.jpeg",
    "episode":["https://rickandmortyapi.com/api/episode/19"],
    "url":"https://rickandmortyapi.com/api/character/121",
    "created":"2017-12-26T16:41:58.391Z"
} `;
console.log(typeof eyeholeMan); // string


const plantillasLiterales = `En caso de querer escapar una comilla o tilde invertida en una plantilla literal,
se debe poner una barra invertida (\) antes de la comilla o tilde invertida.`;



const eyeholeManjson = JSON.parse(eyeholeMan);
console.log(typeof eyeholeManjson); //object

console.log(` INFORMACION DE PERSONAJE 
    Episodio: ${eyeholeManjson.episode[0]}
    Image: ${eyeholeManjson.image}`);


const numeroRandom =  Math.random();
const numeroMayorOmenor = (numero) => `El ${numero} es: ${ numero < numeroRandom  ? `es menor que ${numeroRandom}` : 
    `es mayor que ${numeroRandom}`}`;

const a = numeroMayorOmenor(0);
console.log(a);






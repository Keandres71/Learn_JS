/* 
Javascript

1. Dinamico = cambian las variables en tiempo de ejecucion
2. Tipado = Es de tipado debil, no hay que especificar el tipo de dato para crear una variable
3. Tipos de datos = 
Primitives = (Se comparan por valor), 
objects (Se  comparan por referencia), dos cajas con el mismo valor adentro, no dejan de ser cajas diferentes
functions
*/

//  MANERA DE LEVANTAR UN SERVIDOR
    /* const http = require('http');

const server = http.createServer((req,res) => {
    res.status = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
});

server.listen(3000); // CON IP DE RED LOCAL ( http://192.168.0.15:3000/ )
console.log("Servidor up"); */


import dotenv from 'dotenv'; // Es global
import express from 'express';
import { charactersRickMorty } from '../bbdd.js';
dotenv.config(); // Toma por defecto el ( .env )



const PORT = 3000;
const expressApp = express();

expressApp.use(express.json());
expressApp.use(express.text());


/* expressApp.get('/', (req,res) => { // endpoints  
    //res.send('CHARACTERS OF RICK AND MORTY');
}); */
//OBTENER
expressApp.get("/profile/:id", (req,res) => {
    const { id } = req.body;
    const character = charactersRickMorty.find((character) => character.id === id);
    if(!character) return res.status(404).send();

    return res.send(character);
});


//CREAR
expressApp.post('/profile', ( req, res ) => {

});
//ACTUALIZAR
expressApp.patch('/profile', ( req, res ) => {

});
//ELIMINAR
expressApp.delete('/profile', ( req, res ) => {
    
});


expressApp.listen(PORT, () => 
    console.log(`Server up in the port ${3000}`));
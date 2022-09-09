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


import dotenv from 'dotenv'; // Configuracion .env (Es global)
import express from 'express';
import cookieParser from 'cookie-parser';
import authRouter from '../routes/auth.js';
import profileRouter from '../routes/profile.js'; 
import authSessionRouter from '../routes/auth_session.js';
import authTokenRouter from '../routes/auth_token.js';

dotenv.config(); // Toma por defecto el ( .env )


const PORT = process.env.PORT;
const expressApp = express();

expressApp.use(cookieParser()); // Middlewares = Para leer las cookies
expressApp.use(express.json()); // Middlewares = Para interpretar json's enviados en http
expressApp.use(express.text()); // Middlewares = Para interpretar text enviados en http
expressApp.use('/profile',profileRouter); // Se define path
expressApp.use('/auth', authRouter);  
expressApp.use('/auth-token', authTokenRouter);
expressApp.use('/auth-session', authSessionRouter);      

expressApp.get('/', (req,res) => { // endpoints  
    res.send('CHARACTERS OF RICK AND MORTY');

});

expressApp.listen(PORT, () => 
    console.log(`Server up in the port ${PORT}`));
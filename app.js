/* 
Javascript

1. Dinamico = cambian las variables en tiempo de ejecucion
2. Tipado = Es de tipado debil, no hay que especificar el tipo de dato para crear una variable
3. Tipos de datos = 
Primitives = (Se comparan por valor), 
objects (Se  comparan por referencia), dos cajas con el mismo valor adentro, no dejan de ser cajas diferentes
functions
*/

//  MANERA DE LEVANTAR UN SERVIDOR CON COMMONJS
    /* const http = require('http');

const server = http.createServer((req,res) => {
    res.status = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
});

server.listen(3000); // CON IP DE RED LOCAL ( http://192.168.0.15:3000/ )
console.log("Servidor up"); */

const {pathname: root} = new URL('../routes', import.meta.url)

import dotenv from 'dotenv'; // Configuracion .env (Es global)
import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser'; // Para manipular y leer las cookies = Middleware


//ROUTERS
import authRouter from './routes/auth.js';
import profileRouter from './routes/profile.js'; 
import authSessionRouter from './routes/auth_session.js';
import authTokenRouter from './routes/auth_token.js';

//PARA QUE EL __dirname FUNCIONE CON ECMASCRIPT MODULE
import path from 'path';
import {fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


dotenv.config(); // Toma por defecto el ( .env )


const PORT = process.env.PORT;
const expressApp = express(); // Aplicacion

//MIDDLEWARES
expressApp.use(cookieParser()); // Middlewares = Para leer las cookies
expressApp.use(express.json()); // Middlewares = Para interpretar json's enviados en http
expressApp.use(express.text()); // Middlewares = Para interpretar text enviados en http
expressApp.use(urlencoded({extended:false}));


// URL ROUTERS
expressApp.use('/profile',profileRouter); // Se define path inicial y Routers
expressApp.use('/auth', authRouter);  
expressApp.use('/auth-token', authTokenRouter);
expressApp.use('/auth-session', authSessionRouter);   



expressApp.get('/', (req,res) => { // endpoints  
    res.json({"Ruta principal":"The root"});
});


expressApp.get('/setCookie', (req, res) => { //Estableciendo una cookie
    res.cookie('cookie en session', 'valor de la cookie', {
        maxAge: 5000, // TIEMPO DE EXPIRACION DE LA COOKIE
        httpOnly: true
        //expires: new Date("2022-11-11")
    });
    res.send('COOKIE');
});


expressApp.use((req,res,next) => { // Middleware = Se ejecuta antes de cualquier ruta   *next() = Para que siga ejecucion 
    console.log('Middleware todas las rutas pasan por aqui');
    console.log(`Route: ${req.url}. 
    Method: ${req.method}`);

    next() // = Para que siga con la siguiente funcion
});

expressApp.get('/player/:user', (req,res) => {
    const user = req.params.user; //params = Parametros que se envian por la URL
    res.send(`Jugador de futbol ${user}`); 
});

expressApp.get('/search', (req,res) => { 
    console.log(req.query.best);
    const theBest = req.query.best; // Consultas por via URL
    if(theBest === 'Messi'){
        return res.send(`${theBest} es el mejor jugador del mundo`);
    } else {
        return res.send(`${theBest} no es mejor que el Dios Messi`);
    }
    
});

expressApp.get('/body', (req,res) => {
    res.sendStatus(200);
    console.log(req.body); //Retorna el valor enviado en el body
});

expressApp.get('/home', (req,res) => {
    res.sendFile('./FRONTEND/index.html',{ // Enviar cualquier tipo de archivo
        root: __dirname
    })
    //console.log(__dirname) // D:\Usuarios\kquiroca\Documents\Learn_JS 
});

expressApp.use((req, res) => {
    res.status(404).send(`LA PAGINA NO EXISTE`); //Que una url es invalida, responde siempre lo mismo
});


expressApp.listen(PORT, () => 
    console.log(`Server up in the port ${PORT}`));
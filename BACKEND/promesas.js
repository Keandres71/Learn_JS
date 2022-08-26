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
          }, 3000)
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

 
/*           */

//  THEN Y CATCH (En algunos casos suele ser mejor)
messiBest = true;
validatorTheBest = new Promise((resolve, reject) => {
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

t = 9;
juro = new Promise((resolve, reject) => {
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



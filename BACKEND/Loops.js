// FOR	(Demasiado eficiente) - 

let cursojs = [
    'variables',
    'funciones',
    'conversion de tipos',
    'clases',
];

for(let i = 0; i < cursojs.length; i++){
    console.log(`${i + 1}. ${cursojs[i]}`);
}


// ForOf - (No tiene acceso al indice, va siempre progresivo, cuando no se necesit el indice)  
for(leccion of cursojs){    // cuando nos interesa iterar sobre los elementos del array
	console.log(leccion);
}


//ForIn     (Iterar sobre la clave de un objeto)
const jugador = {
    nombre: 'messi',
    club: 'Fc Barcelona'
}
for(const y in jugador){
    console.log(`${y} --> ${jugador[y]}`);
}


//WHILE 

let contador = 0; //Debe finalizar la sentencia para no acasionar errores

while(contador < 3){
    console.log(contador)
	contador++;
}



   






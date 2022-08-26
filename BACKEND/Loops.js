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
	console.log(`ForOf = ${leccion}`);
}


//ForIn     (Iterar sobre la clave de un objeto)
const jugador = {
    nombre: 'messi',
    club: 'Fc Barcelona'
}
for(const y in jugador){
    console.log(`ForIn = ${y} --> ${jugador[y]}`);
}




//WHILE 

let contador = 0; //Debe finalizar la sentencia para no acasionar errores

while(contador < 3){
    console.log(`WHILE = ${contador}`)
	contador++;
}

game_options = ['PIEDRA', 'PAPEL', 'TIJERA'];
game_rules = {
    PIEDRA: {
        TIJERA: true,
        PAPEL: false
    },
    PAPEL: {
        PIEDRA: true,
        TIJERA: false 
    },
    TIJERA: {
        PAPEL: true,
        PIEDRA: false
    }
};

const game = (player1, player2) => {
    if(!game_options.includes(player1) | !game_options.includes(player2)){
        return 'OPCION NO VALIDA';
    }

    if(player1 === player2){
        return '¡EMPATE!'
    }

    if(game_rules[player1][player2]){ // Utilizando Tupla
        return 'PLAYER 1 WIN';
    }else{
        return 'PLAYER 2 WIN'
    }
    
}

console.log(game('PIEDRA', 'PAPEl'));

   






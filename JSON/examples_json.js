import { json } from "express";

const movil = { // OBJETO LITERAL DE JS
    marca:"Xiaomi",
    model:2019,

};


// PUEDE SER UN ARRAY O UNA PROPIEDAD DEL OBJETO TENGA UN ARRAY
const user = [
    {
        name: "Morty Crazy",
        age: 17,
        live: true,
        hobbies:[
            {comer: false},
            {jugar:true}
        ]
    }
];

// SIENDO UN STRING
const jsp = `[ 
    {
        "player":"messi",
        "deport": "soccer"
    }
]`;




console.log(movil); // Objeto de javascipt

console.log(JSON.parse(jsp)); // Conversion de json a objeto de javascipt

console.log(JSON.stringify(user)); // Convirtiendo objeto en formato json
console.log(JSON.stringify(movil)); // Convirtiendo objeto en formato json

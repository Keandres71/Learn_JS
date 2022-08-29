//OBJETOS

// Objetos (No es necesario tener una clase)
const mascota = {
    //ATRIBUTOS O PROPIEDADES   
    nombre:'Nala',
    edad: 1,
    vive: true,
    raza: 'Criolla',
    dueños:['Evoleth', 'Paola']
}

//console.log(mascota);
console.log('Nombre mascota: '+ mascota.nombre);
console.log('Dueño Principal: ' + mascota.dueños[1]);

// typeof = retorna el tipo de dato 
console.log(typeof mascota.nombre);
console.log(typeof mascota.vive);



const IVA = 0.19;

const producto1 = {
    nombre: 'Jabon Protex',
    precio: 3000,
    cantidad: 5,
    impuesto: IVA,
    calculoTotal: function(){  // PARA DEFINIR METODOS EN OBJETOS SOLO FUNCIONA LA FUNCTION ESTANDAR, NO LAS FLECHA
        return this.precio * this.cantidad * this.impuesto;
    }
};

const producto2 = {
    nombre: 'Jabon Rexona',
    precio: 5000,
    cantidad: 3,
    impuesto: IVA,
    calculoTotal: function(){
        return this.precio * this.cantidad * this.impuesto;
    }
};

const factura = {
    item1: producto1,
    item2: producto2,
    calculoTotal: function(){
        return (this.item1.calculoTotal() + this.item2.calculoTotal());
    }   

}


console.log(factura.calculoTotal());




// ITERAR SOBRE LAS PROPIEDADES DE UN OBJETO (La propiedad para iterar esta en el tipo de dato especial = Symbol , nos permite crear propiedades unicas y inmutables)
        // el array tiene la propiedad iterador

const alimento = {
    name: 'Pera',
    color: 'Verde',
    number: 7
}

alimento[Symbol.iterator] = function* (){ // funcion generadora (Convirtiendo alimento en iterador)
    const values = Object.values(alimento);
    for(const value of values){
        yield value;
    }
/*     yield alimento.name;
    yield alimento.color; // (yield es como si fuese un return) yield = recuerda cada iteracion (Itera donde termino la ultima vez, va una a una)
    yield alimento.number;  */     
}

for(const caracteristica of alimento){
    console.log(caracteristica);
}



// SPREAD OPERATOR ( ... )

const usuario = {
    name: 'Kevin Andres',
    identificacion: 292848499
}

const pdv = {
    codigoPos: 1092477,
    ciudad: 'Cali',
    telefono: 3003309009
}

const puntoTotal = {
    ...usuario,         // Unificacion de objetos 
    ...pdv,
    edad: 18,
    club: 'America de Cali'    

}

console.log(puntoTotal);




//     ARRAYS
const lista1 = [1,2,3];
const lista2 = [4,5,6];

const listaFinal = [...lista1, ...lista2]; //Unificar mas arrays
console.log('Unificando con spread ... = ' + listaFinal);

const suma = (...numeros) => {
    const sumaFinal = numeros.reduce((antes,siguiente) => { //reduce() te será útil para tomar todos los elementos de una lista, aplicar una función a cada uno de ellos y acumular el resultado en un valor de salida.
        return antes + siguiente;
    });
    console.log(sumaFinal);
}

suma(60,55,54,12);




// OBJECT (Contiene metodos estaticos)

const pc = {
    procesador: "Intel i core 10th",
    ram: "16gb",
    unidadAlmacenamiento: "SSD 512gb",
    tarjetaVideo: "Nvidia Geforce GTX 1650"
}
//console.log(pc);

const cantidadPc = Object.keys(pc); // Retorna las propiedades de un objeto (ARRAY)
cantidadPc.forEach((i,index) => console.log(`Parte ${index + 1}: ${i} `));
console.log(`La cantidad de atributos del pc es: ${cantidadPc.length}`); //( VER CUANTAS PROPIEDADES TIENE)
console.log(cantidadPc);



const valoresPc = Object.values(pc); // Retorna los valores de un objeto (ARRAY)
valoresPc.forEach((i,index) => console.log(`Componente ${index + 1} = ${i}`))
console.log(valoresPc);


//console.log(Object.entries(pc)); // devuelve un array por cada propiedad del objeto
Object.entries(pc).forEach((elemento) => { 
    const key = elemento[0];
    const value = elemento[1];

    if(typeof value === 'string'){
        pc[key] = value.toUpperCase();
    }
});

//console.log(pc);

const pc2 = {};
Object.assign(pc2,pc); // Copia a otro objeto hasta el primer nivel de absraccion (objetos primitivos, NO OBJETOS)
console.log(pc2);
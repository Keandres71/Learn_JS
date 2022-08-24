const numeroPiezas = 10;
const probabilidad = 0.25;

const comprobarSiEsDefectuosa = () => Math.random() < probabilidad;
 for(let i = 1; i <= numeroPiezas; i++  ){
    const defectuosa = comprobarSiEsDefectuosa();
try{ 
    if(defectuosa) throw `---> La pieza ${i} es la defectuosa`; // throw = Ejecuta mensaje de error que deseemos - Termina cualquier ejecucion posterior
    console.log(`La pieza ${i} fue  fabricada`);
}catch(error){
    console.log(error);
}

 }


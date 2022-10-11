//OBJETO LITERAL
const bicicleta = {
    marco: "OPTIMUS",
    llantas: "MAXXIS",
    color: "NEGRO",
    zoom: false,
    name: '',
    nombreCicla: function(setName){
        this.name = setName;
        return `La bebe se llama ${this.name}`;
    },
    manejar: function(v){
        return 'Has empezado a manejar la bicicleta';
    }
}

//BICICLETA
console.log(bicicleta.nombreCicla('La abeja'));
console.log(bicicleta.manejar());



let account = {
    numberAccount: '27391755',
    amount:272,
    deposit(money) {
        if(money > 0){
            this.amount += money;
            console.log(`
            Dinero depositado satisfactoriamente.
            El monto actual es de ${this.amount}$`);
        }else{
            console.log(`
            El valor a depositar debe ser un digito positivo.
            Disponible: ${this.amount}$.`);
        }
    },
    withdraw(money){
        if(this.amount < money){
            console.log(`No tiene saldo suficiente para el retiro... 
                        Saldo disponible:${this.amount}$`);
        }else{
            this.amount -= money;
            console.log(`Retiro realizado satisfactoriamente.
                        Saldo disponible:${this.amount}$`);
        }

    }
}

//ACCOUNT
account.deposit(8);
account.withdraw(2);
console.log(account);




// CONSTRUCTOR FEO //POSTS
function Post() {
    this.idPost = '';
    this.name = '';
    this.like = '';

}    

const post1 = new Post();
console.log(post1.day);
Post.prototype.day = '10/10/2022'; //Sino encuentra la propiedad en el objeto, la busca en el constructor (Post).
console.log(`Prototype day = ${post1.day}`);



//CONSTRUCTOR BELLO CLASS
class Pan {
    constructor(name,price) { // Es el encargado de crear o instanciar el objeto.
        this.name = name;    // Define las propiedades del objeto.
        this.price = price;
        this.ingredientes = [];
    }

    getIngredientes(){
        return this.ingredientes;
    }

    setAddIngredientes(...ingre){
        this.ingredientes.push(ingre);
    }

    oferta(){ // Esta en la clase, no en el objeto
        return `El valor de ${this.name} es: $${this.price} pesos.`;
    }
}
const pan1 = new Pan('Pan royal', 1000);
const pan2 = new Pan('Pan Crema',1300); 

pan1.setAddIngredientes('harina','azucar','huevos');

pan1.brother = pan2; //ASOCIACION DE OBJETOS O PROPIEDADES

console.log(pan1);
//console.log(pan1.oferta());

class Galleta extends Pan {
    constructor(name,price,chips){
        super(name,price); //Para heredar el constructor
        this.chips = chips;
        this.colorGalleta = '';
    }

    setColorGalleta(colorG){
        this.colorGalleta = colorG;
    }
}

const caraFeliz = new Galleta('Cara Sapo', 700, 'chocolate');
caraFeliz.setAddIngredientes('harina','huevos');
caraFeliz.setColorGalleta('Verde');
console.log(caraFeliz); 


// Sobrecarga = Una misma funcion que puede procesar diferentes tipos de parametros;
const countItems = (algo) => {
    return algo.toString().length;
}
console.log(countItems('jjbjbjb'));
console.log(countItems(278));



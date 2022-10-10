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
    manejar: function(){
        return 'Has empezado a manejar la bicicleta'
    }
}

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
            console.log(`El valor a depositar debe ser un digito positivo.
            Disponible: ${this.amount}$.
            `);
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

// CONSTRUCTOR
function Post() {
    this.idPost = '';
    this.name = '';
    this.like = '';

}    

const post1 = new Post();
console.log(post1);

bicicleta.nombreCicla('La abeja');
console.log(bicicleta.name);
console.log(bicicleta.manejar());

account.deposit(8);
account.withdraw(2);

console.log(account);

/* let andarEnCicla = bicicleta.manejar();
console.log(andarEnCicla); */
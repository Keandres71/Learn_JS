// CLASES Y METODOS
class televisor{
    constructor(marca,dimensiones){
        this.marca = marca;
        this._dimensiones = dimensiones;
        this.canales = [];
        console.log('Instanciamiento de Televisor satisfactorio');
    }

    static prenderTelevisor = 0; // static = Hacen parte de la clase, no del objeto

    static estadoTelevisor(a){
        if(a === 1){
            this.prenderTelevisor = a;
            console.log('El televisor esta prendido');
        }else if(a === 2){
            this.prenderTelevisor = a;
            console.log('El televisor se encuentra en reposo');
        }else{
            console.log('El televisor se encuentra apagado');
        }
    }

    get dimensiones(){
        //console.log('GETTER');
        return this._dimensiones; // _dimensiones es convencion privada ( _ )
    }

    set dimensiones(nuevaDimension){
        if(nuevaDimension > 0 && nuevaDimension <= 30){
            console.log('SETTER');
            this._dimensiones = nuevaDimension;
        }
    }

    setCanales(canal){
        this.canales.push(canal);
    }

    eliminarUltimoCanal(){
        this.canales.pop();
    }
}

lgh = new televisor('Samsung',37.9);
lgh.setCanales('FOX');
lgh.setCanales('Star+');
lgh.setCanales('ESPN');
lgh.eliminarUltimoCanal();

lgh.dimensiones = 28.33; //SET
console.log(lgh.dimensiones); //GET

televisor.estadoTelevisor(2);           // STATIC = Hace parte de la clase
console.log(televisor.prenderTelevisor);

console.log(lgh);



//CALLBACK (Es una funcion que se pasa como parametro a otra funcion)

// PROTOTYPE = OBJECT[class, objects] 
//    ^  Donde se encuentran todas las funciones, tanto de la clase como las que se heredan nativamente de object

// HERENCIA DE CLASES
class Usuario{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    login(email,password){       
        return this.email === email && this.password === password;
    }

    bienvenida(){
        console.log(`Hola, bienvenido ${this.name}, soy el mejor aprendizaje autotidacta`);
    }
}

class Alumno extends Usuario{
    constructor(name,email,password){
        super(name,email,password); //SUPER (Hereda metodo de la clase padre)
        this.cursos = [];
        this.activo = false;
    }

    activar(){
        this.activo = true;
    }

    login(email,password){
        if(!this.activo) return false;
        return super.login(email,password); //SUPER (Hereda metodo de la clase padre)
    }

    agregarCurso(curso){
        return this.cursos.push(curso);
    }

    eliminarCurso(){
        return this.cursos.pop();
    }
}

const Persona1 = new Usuario('Kevin Andres','kevinandres7117@gmail.com', 'loyal123');
const Persona2 = new Alumno('Minero Perlaza','perlaza7@gmail.com', 'soeral12');

console.log(Persona2 instanceof Alumno); // Compara un objeto y devuelve si es una instancia un cierta clase

Persona1.bienvenida();  

Persona2.agregarCurso('Node Js');
Persona2.agregarCurso('Mongo DB');
Persona2.agregarCurso('JS');
Persona2.eliminarCurso();
Persona2.activar();
console.log(Persona2);
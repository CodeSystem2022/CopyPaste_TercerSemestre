//** CLASES ** 
// A difgerencia de los objetos ,una clase es una plantilla asique en la clase vamos a definir los atributos y metodos que contengan estos objetos
// Generar clases y a aprtir de estas clases generar objetos de estas clasesun objeto es una instancia de una clase.  
// un objeto puede tener valores en sus atributos 
// la clase no contiene valores, si los tiene se aplicara a todos sus objetos ya que es una plantilla y a apartir de esta crearemos los objetos    
// La clase tendra nombre, atributos y métodos y permite generar objetos con estos

class Persona {
    constructor(nombre,apellido){ //-> método constructor 
        this._nombre = nombre ; //-> atributo this 
        this._apellido = apellido;
    }
    //método get para poder leer la info del atributo y el set para modificar el valor del atributo -> no se puede llamar igual que las  propiedades (atributos) de la clase cuando creamos get and set por eso "_"
    get nombre (){
        return this._nombre //-> accedemos a la clase por metodo get desde nombre 
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido (){
        return this._apellido //-> accedemos a la clase por metodo get desde apellido 
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}

//** CLASE HIJA **/
class Empleado extends Persona{ //-> clase hija que extiende de persona 
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);  //-> palabra reservada que se utiliza en la construccion de la clase hija 
        this._departamento = departamento; //-> atributo departamento ,ya que usare get y set no se podran llamar igual a los atributos de nuestra clase
    }
        get departamento(){
            return this._departamento; //-> accedemos a la clase por metodo get desde departamento 
        }
        set departamento(departamento){
            this._departamento = departamento;
        }    
}

//** OBJETO **/
let persona1 = new Persona('Ana','Perez'); //-> le pasamos los argumentos al objeto 
console.log(persona1.nombre);
persona1.nombre = 'Maria';
console.log(persona1.nombre);

console.log(persona1.apellido);
persona1.apellido='Gonzalez';
console.log(persona1.apellido);

//console.log(persona1);
let persona2 = new Persona('Juan ','Rodriguez');
console.log(persona2.nombre);
persona2.nombre = 'Sol';
console.log(persona2.nombre);

console.log(persona2.apellido);
persona2.apellido = 'Sanchez ';
console.log(persona2.apellido);

//console.log(persona2);

let empleado1 = new Empleado('Maria','Caceres','Abogacia');

console.log(empleado1);

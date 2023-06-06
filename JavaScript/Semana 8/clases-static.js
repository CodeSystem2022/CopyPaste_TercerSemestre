//* Clases - Static */

//* CLASE PADRE/SUPERCLASE/MADRE: Persona */
class Persona {
    // extends Object
    //static contadorObjetosPersona = 0 // atributo estatico
static contadorPersonas = 0 // atributo estatico
static get MAX_OBJ() { // este metodo simula una constante par ael maximo de personas a instanciar
    return 5
}

email = 'Valor default email' // atributo no estatico

// De no tener un constructor, por defecto tenemos el constructor vacio
constructor(nombre, apellido) {
    this._nombre = nombre
    this._apellido = apellido
      //Persona.contadorObjetosPersona += 1
      //console.log(`Se incrementa el contador: ${Persona.contadorObjetosPersona}`)
    if(Persona.contadorPersonas < Persona.MAX_OBJ) {
        this.idPersona =  ++Persona.contadorPersonas 
    } else {
        console.log('Se ha superado el maximo de objetos permitidos')
    }
}

// Getter ->obtiene valor,  y Setter ->modifica valor
get nombre() {
    return this._nombre
}

get apellido() {
    return this._apellido
}

set nombre(nombre) {
    this._nombre = nombre
}

set apellido(apellido) {
    this._apellido = apellido
}

// Heredar método
nombreCompleto() {
    return this.idPersona+ ', '+this._nombre + ', ' + this._apellido
}

// toString lo hereda de clase Object
toString() {
    return this.nombreCompleto()
}

static saludar() {
    console.log('Saludo desde el método static')
}

static saludar2(persona) {
    console.log(`Hola ${persona.nombre} ${persona.apellido}`)
}
}

//* CLASE HIJA/O: Empleado */
class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
    super(nombre, apellido)
    this._departamento = departamento
    }

get departamento() {
    return this._departamento
    }

set departamento(departamento) {
    this._departamento = departamento
    }

// Sobreescritura -> modificar el comportamiento de la clase padre(Object)
nombreCompleto() {
    // Se aplica el polimorfismo
    // El metodo que se ejecuta depende si es una referencia de la clase padre o hija
    return super.nombreCompleto() + ', departamento: ' + this._departamento
    }
}

// Instancio objetos de mi clase Persona
let persona1 = new Persona('Martin', 'Lopez')
let persona2 = new Persona('Martina', 'Lara')

// Con el setter modifico los nombres
persona1.nombre = 'Carlos'
persona2.nombre = 'Maria Laura'

// Con el setter modifico los apellidos
persona1.apellido = 'Gomez'
persona2.apellido = 'Costa'

// Instancio un objeto de la clase empelado
let empleado1 = new Empleado('María', 'Ramirez', 'ventas')
console.log(empleado1);
console.log(empleado1.nombreCompleto());

  //* Palabra static con métodos: Parte 1 y 2 */

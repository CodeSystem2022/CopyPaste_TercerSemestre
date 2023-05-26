let x = 10; //variable de tipo primitiva
console.log(x.length);
console.log('Tipos primitivos');

//* OBJETOS PARTE 2 */
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase(); //Convierte las minúsculas a mayúsculas.
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){ // Método o funcion en JavaScript
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){
        return 'El nombre es: '+this.nombre+' '+', Edad: '+this.edad;
    }
}

console.log('Nombre: ' + persona.nombre);
console.log('Apellido: ' + persona.apellido);
console.log('Su email es: ' + persona.email);
console.log('De la edad de ' + persona.edad +' años');
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');

let persona2 = new Object();//Se debe crear un nuevo objeto en memoria
persona2.nombre = "Juan";
persona2.direccion = "Salada 14";
persona2.telefono = "45134234512";
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']); //Accedemos como si fuera un arreglo
console.log('Usamos el ciclo for in');
//For in y accedemos al objeto como si fuera un arreglo
for (propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
    
}
console.log('Cambiamos y eliminamos un error');
persona.apellida = 'Betancud'; //Cambiamos dinamicamente un valor del objeto
delete persona.apellida; //Eliminamos el error
console.log(persona);

//* DISTINTAS FORMAS DE IMPRIMIR UN OBJETO */ 

//Número 1 (la más sencilla): concatenar cada valor de cada propiedad.
console.log('Distintas formas de imprimir un objeto: forma 1');
console.log(persona.nombre+', '+persona.apellido);

//Número 2: a través del ciclo "for in"
console.log('Distintas formas de imprimir un objeto: forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Número 3: la función object.values()
console.log('Distintas formas de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

// Número 4: Utilizaremos el método JSON.stringify
console.log('Distintas formas de imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar el metodo get')
console.log(persona.nombreEdad);

console.log('Comenzamos con el método get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

//** FUNCION CONSTRUCTORA **/
// Las clases en JavaScript está basado en PROTOTIPOS. Los parámetros son los atributos del objeto y se pueden setear valores por default,
function Person2(firstName, lastName, email) {
  this.firstName = firstName
  this.lastName = lastName
  this.email = email
  this.fullName = function () {
    // funcion en el constructor
    return `${firstName} ${this.lastName}`
  }
}

// Creo un objeto utilizando el método constructor
const father = new Person2('Leo', 'Lopez', 'lopezl@gmail.com')
father.firstName = 'Leonardo' // le vuelvo a asignar otro valor en su atributo
console.log('* * * * FUNCIÓN CONSTRUCTORA * * * *')
console.log(father)
// OUTPUT
/*
Person2 {
  firstName: 'Leonardo',
  lastName: 'Lopez',
  email: 'lopezl@gmail.com'
}
*/
console.log(father.fullName())
// Creo otro objeto utilizando el método constructor
const mother = new Person2('Laura', 'Contrera', 'contreral@gmail.com')
console.log(mother)

// CASO OBJETO
const myObject = new Object() // Esta es una opción formal
const myObject2 = {} // Esta opción es breve y recomendada

// CASO STRING
const myObject3 = 'Hola' // Esta es la sintaxis simplificada y recomendada
console.log(typeof myObject3) // string

// CASO NUMBER
const myNumber = new Number(1) // no recomendable
const myNumber2 = 2 // recomendada
console.log(typeof myNumber2) // number, OJO number es de TIPO PRIMITIVO NO ES OBJETO

// CASO BOOLEAN
const myBoolean = new Boolean(false) // formal
const myBoolean2 = false // recomendado
console.log(typeof myBoolean2) // boolean, OJO bolean es de TIPO PRIMITIVO NO ES OBJETO

// CASO ARRAY
const myArray = new Array() // formal
const myArray2 = [] // recomendada

// CASO FUNCION
//const myFunction = new Function(){} // notacion simplificada y recomendada

/** PROTOTYPE ***/
father.telephone = '541122334455'
console.log(father)
/*
Person2 {
  firstName: 'Leonardo',
  lastName: 'Lopez',
  email: 'lopezl@gmail.com',
  fullName: [Function (anonymous)],
  telephone: '541122334455'
}
*/
// la propiedad(atributo) 'telephone' solo existe para el objeto father, no para el objeto mother

// si queremos crear una propiedad que afecte a todos los objetos creados con Person2 usamos prototype
Person2.prototype.telephone = '5491122223333'
console.log(father)
console.log(mother)

/** CALL **/
const persona4 = {
  nombre: 'Juan',
  apellido: 'Perez',
  //nombreCompleto: function(titulo, telefono) {
  nombreCompleto: function() {  
    // return `${titulo}: ${this.nombre} ${this.apellido}, ${telefono} `
    return `${this.nombre} ${this.apellido}`
  }
}

const persona5 = {
  nombre: 'Carlos',
  apellido: 'Lara'
}

console.log(persona4.nombreCompleto('Lic.', '5491144556677')) // OUTPUT: Lic.: Juan Perez, 5491144556677 
console.log(persona4.nombreCompleto.call(persona5, 'Ing.', '5491111111111'))

/** APPLY ***/
// Permite mandar a llamar un metodo en un objeto que no tiene definido el metodo
console.log(persona4.nombreCompleto.apply(persona5))
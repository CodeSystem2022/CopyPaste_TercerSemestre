const x = 10 // variable de tipo primitivo
console.log(x.length) // OUTPUT: undefined

/* OBJETOS */
// Se crea un objeto en memoria, con una referencia(valor hexadecimal)
const person = {
  firstName: 'Ana',
  lastName: 'Gomez',
  email: 'agomez@gmail.com',
  age: 30,
  completeName: function () {
    // metodo
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(`person.firstName: ${person.firstName}`) // OUTPUT: Ana
console.log(`person.lastName: ${person.lastName}`) // OUTPUT: Gomez
console.log(`person.email: ${person.email}`) // OUTPUT: agomez@gmail.com
console.log(`person.age: ${person.age}`) // OUTPUT: 30
console.log(person)
// OUTPUT:
/*
{
  firstName: 'Ana',
  lastName: 'Gomez',
  email: 'agomez@gmail.com',
  age: 30,
  completeName: [Function: completeName]
}
*/
console.log(person.completeName()) // OUTPUT: Ana Gomez

// Creando el objeto con new Object (DEPRECADO)
const person2 = new Object()
person2.firstName = 'Juan'
person2.address = 'Avenida 1234'
person2.telephone = '549123456789'
console.log(`person2.telephone: ${person2.telephone}`) // OUTPUT: 549123456789
// recordar que JavaScript es case sensitive

/* Acceder a la propiedad de un objeto */
// Accediendo como si fuera un array, es el menos usado
console.log(person['lastName']) // OUTPUT: Gomez
// con for in
for (property in person) {
  console.log(property)
  console.log(person[property])
}
// Se ven todas las KEY del objeto en el primer console
// Se ven todoas los VALUES del objeto en el segundo console
// OUTPUT:
/*
firstName
Ana
lastName
Gomez
email
agomez@gmail.com
age
30
completeName
[Function: completeName]
*/

/* Agregar y eliminar propiedades de los Objetos */
// Para MODIFICAR
// Accedemos a la key mediante DOT NOTATION
// Para no crear una nueva propiedad, usamos dot notation, luego del . el VSC muestra las opciones
person.lastName = 'Perez' // cambiamos el valor del apellido
console.log(`Modificando el lastName de person: ${person.lastName}`) // OUTPUT: Perez

// Para AGREGAR
person.secondName = 'Laura'
console.log('Agregamos el atributo secondName a person')
console.log(person)

// Para ELIMINAR
delete person.secondName
// OJO con ESLint nos advierte:
// 'Avoid the delete operator wich can impact perfonrmance'
console.log('Eliminamos el atributo recién agregado')
console.log(person)

/* Distintas formas de imprimir un Objeto con: Object.values() y JSON.stringify() */

console.log('* Distintas formas de imprimir un Objeto *')
// La más sencilla: concatenar cada valor de la propiedad
console.log(
  `Concatenando cada valor de la propiedad: ${person.firstName} ${person.lastName}`
) // OUTPUT: Carlos Gil

// Por medio del ciclo for in
for (nombrePropiedad in person) {
  console.log(person[nombrePropiedad])
}
// OUTPUT:
/*
Ana
Perez
agomez@gmail.com
30
[Function: completeName]
*/

// Con Object.values()
const personArray = Object.values(person)
console.log(`Con Object.values() para ver los valores: ${personArray}`)
// OUTPUT:
/*
Ana,Perez,agomez@gmail.com,30,function() { // metodo 
    return `${this.firstName} ${this.lastName}`
  }
*/

// Con JSON.stringify()
console.log(`Con JSON.stringify(): ${JSON.stringify(person)}`)
// PUTPUT: {"firstName":"Ana","lastName":"Perez","email":"agomez@gmail.com","age":30}


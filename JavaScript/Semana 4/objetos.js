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


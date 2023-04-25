/* CLASE DE ARRAYS */

/* Creación de array */
// NO USAR -> precaria
const autos = new Array('Ferrari', 'Audi', 'Renault')
console.log(`Array autos: ${autos}`)
// La forma que se usa ahora
const cars = ['Ferrari', 'Audi', 'Renault']
console.log(`Array cars: ${cars}`)

/* Para ver los elementos */
// el primer elemento es de indiice 0
console.log(`Primer elemento del array: ${cars[0]}`)

// recorre el array con un ciclo for
for(let i = 0; i < cars.length; i++) {
console.log(`Elemento ${i+1}: ${cars[i]}`)
}

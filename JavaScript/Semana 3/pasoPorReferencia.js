/* PASO POR REFERENCIA */

// la constante persona guarda la referencia a un objeto
const persona = {
    nombre: "Leonardo",
    apellido: "Solan"
  }
  console.log(persona)
  // OUTPUT: { nombre: 'Leonardo', apellido: 'Solan' }
  
  function cambiarObjeto(p1) {
    p1.nombre = 'Jesica'
    p1.apellido = 'Viola'
  }
  
  cambiarObjeto(persona)
  console.log("persona luego de cambiarObjeto: ")
  console.group(persona)
  // OUTPUT:
  // persona luego de cambiarObjeto: 
  // { nombre: 'Jesica', apellido: 'Viola' }
/* FUNCIONES DE TIPO SELF E INVOKING */

// No se puede reutilizar, sólo se manda a llamar a ella misma una sola vez
;(function (a, b) {
    console.log(`Ejecutando la función: ${a + b}`)
  })(9, 6)
  
  // OUTPUT: Ejecutando la función: 15
  
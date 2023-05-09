/* PALABRA RESERVADA CONTINUE */
for (let contando = 0; contando <= 10; contando++) {
    if (contando % 2 !== 0) {
      continue; // continua a la siguiente iteración
    }
    console.log(contando);
  }
  
  // solo imprime los números pares
  console.log("* Termina el ciclo *");
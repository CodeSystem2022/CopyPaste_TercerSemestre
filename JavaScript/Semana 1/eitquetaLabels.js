/* ETIQUETAS LABELS */
inicio: for (let contando = 0; contando <= 10; contando++) {
    if (contando % 2 !== 0) {
      break inicio;  //sale del ciclo
    }
    console.log(contando);
  }
  
  console.log("* Termina el ciclo *");
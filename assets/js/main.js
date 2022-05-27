import { ciclo2, ciclo3, ciclo4, ciclo5, ciclo6, rotacion } from "./ciclos.js";
import {
  secuenciaDias,
  arrSemana0,
  arrSemana1,
  arrSemana2,
  arrSemana3,
  arrSemana4,
} from "./dom.js";

const ciclos = (ciclo, personal) => {
  for (let a = 0; a < 2; a++) {
    for (let i = 0; i < 7 * (personal - 1); i++) {
      let aRotar = ciclo[a][i];

      ciclo[a].push(rotacion(aRotar, personal));
    }
  }

  return ciclo;
};

secuenciaDias(arrSemana0, 0);
secuenciaDias(arrSemana1, 1);
secuenciaDias(arrSemana2, 2);
secuenciaDias(arrSemana3, 3);
secuenciaDias(arrSemana4, 4);

// --------------------
let prueba = ciclos(ciclo3, 3);


let pruebaContador = 58
let arr = prueba

while(arr[1].length < pruebaContador){
  arr[1] = [...arr[1],...arr[1]]
}


console.warn(arr[1].length) // = 84
console.log(arr[1][pruebaContador])

/* while(ciclo3.length<pruebaContador){
  let contador = [...arr,...arr]
  console.log(contador)
} */

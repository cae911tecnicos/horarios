import { ciclo2, ciclo3, ciclo4, ciclo5, ciclo6, rotacion } from "./ciclos.js";
import {
  secuenciaDias,
  arrSemana0,
  arrSemana1,
  arrSemana2,
  arrSemana3,
  arrSemana4,
} from "./dom.js";
import {} from "./personal.js"

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



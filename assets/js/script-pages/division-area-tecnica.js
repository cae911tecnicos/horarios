import { personalTecnico } from "../personal/personal-division-area-tecnica.js";

import { rotacion } from "../lib/ciclos.js";
import {
  secuenciaDias,
  arrSemana0,
  arrSemana1,
  arrSemana2,
  arrSemana3,
  arrSemana4,
} from "../lib/dom.js";
import { ordenPersonalTecnicoFeriado } from "../lib/feriados.js";

const ciclos = (ciclo, personal) => {
  for (let a = 0; a < 2; a++) {
    for (let i = 0; i < 7 * (personal - 1); i++) {
      let aRotar = ciclo[a][i];

      ciclo[a].push(rotacion(aRotar, personal));
    }
  }

  return ciclo;
};

secuenciaDias(arrSemana0, 0, personalTecnico, ordenPersonalTecnicoFeriado, "personalTecnico");
secuenciaDias(arrSemana1, 1, personalTecnico, ordenPersonalTecnicoFeriado, "personalTecnico");
secuenciaDias(arrSemana2, 2, personalTecnico, ordenPersonalTecnicoFeriado, "personalTecnico");
secuenciaDias(arrSemana3, 3, personalTecnico, ordenPersonalTecnicoFeriado, "personalTecnico");
secuenciaDias(arrSemana4, 4, personalTecnico, ordenPersonalTecnicoFeriado, "personalTecnico");
import { ciclo2, ciclo3, ciclo4, ciclo5, ciclo6, rotacion } from "./ciclos.js";
import {
  secuenciaDias,
  arrSemana0,
  arrSemana1,
  arrSemana2,
  arrSemana3,
  arrSemana4,
  arrSemana00,
  arrSemana01,
  arrSemana02,
  arrSemana03,
  arrSemana04,
} from "./dom.js";
import { personalTecnico, personalInformesJudiciales } from "./personal.js";
import {
  ordenPersonalTecnicoFeriado,
  ordenPersonalInformesFeriado,
} from "./feriados.js";

const ciclos = (ciclo, personal) => {
  for (let a = 0; a < 2; a++) {
    for (let i = 0; i < 7 * (personal - 1); i++) {
      let aRotar = ciclo[a][i];

      ciclo[a].push(rotacion(aRotar, personal));
    }
  }

  return ciclo;
};



secuenciaDias(
  arrSemana00,
  0,
  personalInformesJudiciales,
  ordenPersonalInformesFeriado
);
secuenciaDias(
  arrSemana01,
  1,
  personalInformesJudiciales,
  ordenPersonalInformesFeriado
);
secuenciaDias(
  arrSemana02,
  2,
  personalInformesJudiciales,
  ordenPersonalInformesFeriado
);
secuenciaDias(
  arrSemana03,
  3,
  personalInformesJudiciales,
  ordenPersonalInformesFeriado
);
secuenciaDias(
  arrSemana04,
  4,
  personalInformesJudiciales,
  ordenPersonalInformesFeriado
);

import { personalTecnico, } from "./personal/personal-division-area-tecnica.js"
import { personalInformesJudiciales, } from "./personal/personal-seccion-informes-judiciales.js"

import { ciclo_2_tecnicos, ciclo_3_tecnicos, ciclo_4_tecnicos, ciclo_5_tecnicos, ciclo_6_tecnicos, rotacion } from "./lib/ciclos.js";
import {
  secuenciaDias,
  arrSemana0,
  arrSemana1,
  arrSemana2,
  arrSemana3,
  arrSemana4,
} from "./lib/dom.js";
import {
  ordenPersonalTecnicoFeriado,
  ordenPersonalInformesFeriado,
} from "./lib/feriados.js";


const ciclos = (ciclo, personal) => {
  for (let a = 0; a < 2; a++) {
    for (let i = 0; i < 7 * (personal - 1); i++) {
      let aRotar = ciclo[a][i];

      ciclo[a].push(rotacion(aRotar, personal));
    }
  }

  return ciclo;
};

secuenciaDias(arrSemana0, 0, personalTecnico, ordenPersonalTecnicoFeriado);
secuenciaDias(arrSemana1, 1, personalTecnico, ordenPersonalTecnicoFeriado);
secuenciaDias(arrSemana2, 2, personalTecnico, ordenPersonalTecnicoFeriado);
secuenciaDias(arrSemana3, 3, personalTecnico, ordenPersonalTecnicoFeriado);
secuenciaDias(arrSemana4, 4, personalTecnico, ordenPersonalTecnicoFeriado);

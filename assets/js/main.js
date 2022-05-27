import { ciclo2, ciclo3, ciclo4, ciclo5, ciclo6, rotacion} from "./ciclos.js";
import { numeroDeSemana,sumarDias, diasSemana } from "./date.js";


// Constantes y Variables =======================================================
const semana0 = new Date(),
  semana1 = new Date(),
  semana2 = new Date(),
  semana3 = new Date(),
  semana4 = new Date();

/* const arrSemana0 = diasSemana(semana0),
  arrSemana1 = diasSemana(sumarDias(semana1, 7)),
  arrSemana2 = diasSemana(sumarDias(semana2, 14)),
  arrSemana3 = diasSemana(sumarDias(semana3, 21)),
  arrSemana4 = diasSemana(sumarDias(semana4, 28)); */
//Fin  Constantes y Variables ===================================================

//Inicio Manipulacion DOM ==========================================================================
const arrSemana0 = diasSemana(semana0),
  arrSemana1 = diasSemana(sumarDias(semana1, 7)),
  arrSemana2 = diasSemana(sumarDias(semana2, 14)),
  arrSemana3 = diasSemana(sumarDias(semana3, 21)),
  arrSemana4 = diasSemana(sumarDias(semana4, 28));

// Funcion Crear secuencias de Dias
export const secuenciaDias = (arrSemana, num) => {
    const etiquetaSemana = document.querySelector(`#semana${num}`);
  
    for (let i = 0; i < 7; i++) {
      const diaSemana = document.createElement("td");
      diaSemana.innerText = arrSemana[i];
      etiquetaSemana.append(diaSemana);
    }
  };
  
  secuenciaDias(arrSemana0, 0);
  secuenciaDias(arrSemana1, 1);
  secuenciaDias(arrSemana2, 2);
  secuenciaDias(arrSemana3, 3);
  secuenciaDias(arrSemana4, 4);

const ciclos = (ciclo, personal) => {
  for (let a = 0; a < 2; a++) {
    for (let i = 0; i < 7 * (personal - 1); i++) {
      let aRotar = ciclo[a][i];

      ciclo[a].push(rotacion(aRotar, personal));
    }
  }

  return ciclo;
};

console.log(ciclos(ciclo3, 3));

// Fin Ciclos ==================================================================

import {
  sumarDias,
  diasSemana,
  iniciCicloFormateado,
  diferenciaFecha,
} from "./date.js";

import { cicloDelDia } from "./ciclos.js";
import { personalEnServicio } from "./personal.js";

const semana0 = new Date(),
  semana1 = new Date(),
  semana2 = new Date(),
  semana3 = new Date(),
  semana4 = new Date();

export const arrSemana0 = diasSemana(semana0);
export const arrSemana1 = diasSemana(sumarDias(semana1, 7));
export const arrSemana2 = diasSemana(sumarDias(semana2, 14));
export const arrSemana3 = diasSemana(sumarDias(semana3, 21));
export const arrSemana4 = diasSemana(sumarDias(semana4, 28));

// Funcion Crear secuencias de Dias
export const secuenciaDias = (arrSemana, num) => {
  const etiquetaSemana = document.querySelector(`#semana${num}`);
  // Funcion que determina que ciclo que tiene el dia
  const determinaCicloDelDia = (fecha) => {
    let cuentaDias = diferenciaFecha(iniciCicloFormateado, fecha); // ejemplo: 58
    let arr = cicloDelDia(personalEnServicio.length);

    while (arr[0].length < cuentaDias) {
      arr[0] = [...arr[0], ...arr[0]];
    }

    while (arr[1].length < cuentaDias) {
      arr[1] = [...arr[1], ...arr[1]];
    }

    let mañana = arr[0][cuentaDias]
    let tarde = arr[1][cuentaDias]

    return [mañana,tarde]
  };

  for (let i = 0; i < 7; i++) {
    const diaSemana = document.createElement("td");
    diaSemana.innerText = arrSemana[i];
    etiquetaSemana.append(diaSemana);
  }

  const etiquetaManiana = document.querySelector(`#maniana${num}`);

  for (let i = 0; i < 7; i++) {
    let fechaDelDia = arrSemana[i];
    const diaSemana = document.createElement("td");
    diaSemana.innerText = determinaCicloDelDia(fechaDelDia)[0];
    etiquetaManiana.append(diaSemana);
  }

  const etiquetaTarde = document.querySelector(`#tarde${num}`);

  for (let i = 0; i < 7; i++) {
    let fechaDelDia = arrSemana[i];
    const diaSemana = document.createElement("td");
    diaSemana.innerText = determinaCicloDelDia(fechaDelDia)[1];
    etiquetaTarde.append(diaSemana);
  }
};

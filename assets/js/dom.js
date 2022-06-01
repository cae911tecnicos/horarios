import {
  sumarDias,
  diasSemana,
  iniciCicloFormateado,
  diferenciaFecha,
} from "./date.js";

import { cicloDelDia } from "./ciclos.js";
import { personalRevista, personalTecnico, listaOrdenPersonal } from "./personal.js";

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

// Funcion para reemplazar Numero de ciclo por la lista del personal
const numeroXpersonal = (numero) => {
  let cantidadPersonal = listaOrdenPersonal(personalTecnico)
  numero = numero -1
  numero = cantidadPersonal[numero].nombre
  return numero


  /* let str = String(numero),
    a,
    b;
  if (str.length == 2) {
    a = str[0];
    b = str[1];
  } else a = str[0];
    a = Number(a)
    b = Number(b)


  return a; */
};

// Funcion Crear secuencias de Dias
export const secuenciaDias = (arrSemana, num) => {
  const etiquetaSemana = document.querySelector(`#semana${num}`);
  // Funcion que determina que ciclo que tiene el dia
  const determinaCicloDelDia = (fecha) => {
    let cuentaDias = diferenciaFecha(iniciCicloFormateado, fecha); // ejemplo: 58
    let personalEnServicio = personalRevista(personalTecnico, fecha)[1];
    //console.warn(personalEnServicio.length, fecha);

    let arr = cicloDelDia(personalEnServicio.length);

    while (arr[0].length < cuentaDias) {
      arr[0] = [...arr[0], ...arr[0]];
    }

    while (arr[1].length < cuentaDias) {
      arr[1] = [...arr[1], ...arr[1]];
    }

    let mañana = arr[0][cuentaDias];
    let tarde = arr[1][cuentaDias];

    return [mañana, tarde];
  };

  // Determina fecha del dia
  for (let i = 0; i < 7; i++) {
    const diaSemana = document.createElement("td");
    diaSemana.innerText = arrSemana[i];
    etiquetaSemana.append(diaSemana);
  }

  // Determina el turno de la mañana
  const etiquetaManiana = document.querySelector(`#maniana${num}`);
  for (let i = 0; i < 7; i++) {
    let fechaDelDia = arrSemana[i];
    const diaSemana = document.createElement("td");
    diaSemana.innerText = determinaCicloDelDia(fechaDelDia)[0];
    etiquetaManiana.append(diaSemana);
  }
  // Determina el turno de la tarde
  const etiquetaTarde = document.querySelector(`#tarde${num}`);
  for (let i = 0; i < 7; i++) {
    let fechaDelDia = arrSemana[i];
    let campoTarde = determinaCicloDelDia(fechaDelDia)[1];
    const diaSemana = document.createElement("td");
    diaSemana.innerText = campoTarde;
    etiquetaTarde.append(diaSemana);
  }
};

console.log(numeroXpersonal(1));

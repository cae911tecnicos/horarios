import { personalTecnico } from "../personal/personal-division-area-tecnica.js";
import { personalInformesJudiciales } from "../personal/personal-seccion-informes-judiciales.js";
import {
  sumarDias,
  diasSemana,
  iniciCicloFormateado,
  diferenciaFecha,
  fechaActual,
  stringToDate,
} from "./date.js";

import { cicloDelDia } from "./ciclos.js";
import { feriados } from "./feriados.js";
import { personalRevista, listaOrdenPersonal } from "./personal.js";

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

// Funcion para generar el resumen
export const totalPersonal = (personal) => {
  return personal.length;
};

// Funcion para reemplazar Numero de ciclo por la lista del personal
const numeroXpersonal = (numero, fecha, personal) => {
  //let personalApellido = personalRevista(personal, fecha)[1];
  let cantidadPersonal = listaOrdenPersonal(personal, fecha);

  let str = String(numero),
    strA,
    strB,
    numA,
    numB;
  if (str.length == 2) {
    strA = str[0]; // 1
    strB = str[1]; // 2
    numA = Number(strA);
    numB = Number(strB);
    numA = numA - 1;
    numA = cantidadPersonal[numA].apellido;
    numB = numB - 1;
    numB = cantidadPersonal[numB].apellido;
    numero = `${numA}\n${numB}`;
  } else {
    numero = numero - 1;
    numero = cantidadPersonal[numero].apellido;
  }
  return numero;
};

// Funcion Crear secuencias de Dias
export const secuenciaDias = (arrSemana, num, personal, ordenFeriado) => {
  let maniana, tarde, semana, diaSemana, etiquetaSemana;
  if (personal == personalTecnico) {
    semana = "semanaTecnicos";
    maniana = "manianaTecnicos";
    tarde = "tardeTecnicos";
    diaSemana = "diaSemanaTecnicos";
    etiquetaSemana = "etiquetaSemanaTecnicos";
  } else if (personal == personalInformesJudiciales) {
    semana = "semanaInformes";
    maniana = "manianaInformes";
    tarde = "tardeInformes";
    diaSemana = "diaSemanaInformes";
    etiquetaSemana = "etiquetaSemanaInformes";
  }

  etiquetaSemana = document.querySelector(`#${semana}${num}`);
  // Funcion que determina que ciclo que tiene el dia
  const determinaCicloDelDia = (fecha) => {
    let cuentaDias = diferenciaFecha(iniciCicloFormateado, fecha); // ejemplo: 58
    let personalEnServicio = personalRevista(personal, fecha)[1];

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
    diaSemana = document.createElement("td");
    diaSemana.innerText = arrSemana[i];
    etiquetaSemana.append(diaSemana);
    diaSemana.className = "fecha";
    // ↓ Para colorear el dia actual
    if (
      stringToDate(arrSemana[i]).getTime() ==
      stringToDate(fechaActual).getTime()
    ) {
      diaSemana.className = "hoy";
      let fechaDelDia = arrSemana[i];
    }
  }
  // Determina el turno de la mañana
  let etiquetaManiana = document.querySelector(`#${maniana}${num}`);
  for (let i = 0; i < 7; i++) {
    let fechaDelDia = arrSemana[i];
    let campoManiana = determinaCicloDelDia(fechaDelDia)[0];
    campoManiana = numeroXpersonal(campoManiana, fechaDelDia, personal);
    diaSemana = document.createElement("td");
    diaSemana.innerText = campoManiana;
    etiquetaManiana.append(diaSemana);
    diaSemana.className = "maniana";
    // ↓ Para colorear el Fin de Semana
    if (i == 5 || i == 6) {
      diaSemana.className = "finde-maniana";
    }

    // ↓ Para colorear el FERIADO
    for (let a = 0; a < feriados.length; a++) {
      let fechaFeriado = feriados[a].dia;
      if (
        stringToDate(arrSemana[i]).getTime() ==
        stringToDate(fechaFeriado).getTime()
      ) {
        diaSemana.className = "feriado";

        // ↓ Para saber a quien le toca ese feriado
        campoManiana = ordenFeriado[0];
        diaSemana.innerText = campoManiana;

        // ↓ Para agregar la leyenda debajo del la tabla
        const etiquetaTabla = document.querySelector("#table" + [num]);
        const leyendaFeriado = document.createElement("div");
        etiquetaTabla.append(leyendaFeriado);
        leyendaFeriado.className = "leyenda";
        leyendaFeriado.innerText = feriados[a].acontecimiento;
      }
    }
  }
  // Determina el turno de la tarde
  const etiquetaTarde = document.querySelector(`#${tarde}${num}`);
  for (let i = 0; i < 7; i++) {
    let fechaDelDia = arrSemana[i];
    let campoTarde = determinaCicloDelDia(fechaDelDia)[1];
    campoTarde = numeroXpersonal(campoTarde, fechaDelDia, personal);
    diaSemana = document.createElement("td");
    diaSemana.innerText = campoTarde;
    etiquetaTarde.append(diaSemana);
    diaSemana.className = "tarde";
    // ↓ Para colorear el Fin de Semana
    if (i == 5 || i == 6) {
      diaSemana.className = "finde-tarde";
    }
    // ↓ Para colorear el FERIADO
    for (let a = 0; a < feriados.length; a++) {
      let fechaFeriado = feriados[a].dia;
      if (
        stringToDate(arrSemana[i]).getTime() ==
        stringToDate(fechaFeriado).getTime()
      ) {
        diaSemana.className = "feriado";

        // ↓ Para saber a quien le toca ese feriado
        campoTarde = ordenFeriado[0];
        ordenFeriado.push(ordenFeriado[0]);
        ordenFeriado.shift();
        diaSemana.innerText = campoTarde;
      }
    }
  }
};



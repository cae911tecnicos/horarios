import { personalTecnico } from "../personal/personal-division-area-tecnica.js";
import { personalInformesJudiciales } from "../personal/personal-seccion-informes-judiciales.js";
import { personalAyudantia } from "../personal/personal-ayudantia.js";
import { fechaActual } from "../lib/date.js";
import { rotacion } from "../lib/ciclos.js";
import {
  secuenciaDias,
  arrSemana0,
} from "../lib/dom.js";
import {
  ordenPersonalTecnicoFeriado,
  ordenPersonalInformesFeriado,
  ordenPersonalAyudantiaFeriado,
} from "../lib/feriados.js";

const ciclos = (ciclo, personal) => {
  for (let a = 0; a < 2; a++) {
    for (let i = 0; i < 7 * (personal - 1); i++) {
      let aRotar = ciclo[a][i];

      ciclo[a].push(rotacion(aRotar, personal));
    }
  }

  return ciclo;
};

const actualTecnico = secuenciaDias(
  arrSemana0,
  0,
  personalTecnico,
  ordenPersonalTecnicoFeriado,
  "personalTecnico"
);
const actualAyudantia = secuenciaDias(
  arrSemana0,
  0,
  personalAyudantia,
  ordenPersonalAyudantiaFeriado,
  "personalAyudantia"
);
const actualInformes = secuenciaDias(
  arrSemana0,
  0,
  personalInformesJudiciales,
  ordenPersonalInformesFeriado,
  "personalInformesJudiciales"
);

document.getElementById("fecha").innerHTML = fechaActual;

document.getElementById("actualManianaTecnico").innerHTML =  actualTecnico[0];
document.getElementById("actualTardeTecnico").innerHTML = actualTecnico[1];

document.getElementById("actualManianaAyudantia").innerHTML = actualAyudantia[0];
document.getElementById("actualTardeAyudantia").innerHTML = actualAyudantia[1];

document.getElementById("actualManianaInformes").innerHTML = actualInformes[0];
document.getElementById("actualTardeInformes").innerHTML = actualInformes[1];


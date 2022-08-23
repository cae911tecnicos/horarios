import { personalTecnico } from "../personal/personal-division-area-tecnica.js";
import { personalInformesJudiciales } from "../personal/personal-seccion-informes-judiciales.js";
import { personalAyudantia } from "../personal/personal-ayudantia.js";
import { fechaActual } from "../lib/date.js";
import { rotacion } from "../lib/ciclos.js";
import { secuenciaDias, arrSemana0 } from "../lib/dom.js";
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

secuenciaDias(
  arrSemana0,
  0,
  personalTecnico,
  ordenPersonalTecnicoFeriado,
  "personalTecnico"
);
secuenciaDias(
  arrSemana0,
  0,
  personalAyudantia,
  ordenPersonalAyudantiaFeriado,
  "personalAyudantia"
);
secuenciaDias(
  arrSemana0,
  0,
  personalInformesJudiciales,
  ordenPersonalInformesFeriado,
  "personalInformesJudiciales"
);

// Quien trabaja hoy
let actualTecnicosManiana = secuenciaDias(
  arrSemana0,
  0,
  personalTecnico,
  ordenPersonalTecnicoFeriado,
  "personalTecnico"
)[0];
let actualTecnicosTarde = secuenciaDias(
  arrSemana0,
  0,
  personalTecnico,
  ordenPersonalTecnicoFeriado,
  "personalTecnico"
)[1]
let actualAyudantiaManiana = secuenciaDias(
  arrSemana0,
  0,
  personalAyudantia,
  ordenPersonalAyudantiaFeriado,
  "personalAyudantia"
)[0];
let actualAyudantiaTarde = secuenciaDias(
  arrSemana0,
  0,
  personalInformesJudiciales,
  ordenPersonalInformesFeriado,
  "personalInformesJudiciales"
)[1]
let actualInformeManiana = secuenciaDias(
  arrSemana0,
  0,
  personalInformesJudiciales,
  ordenPersonalInformesFeriado,
  "personalInformesJudiciales"
)[0];
let actualInformeTarde = secuenciaDias(
  arrSemana0,
  0,
  personalInformesJudiciales,
  ordenPersonalInformesFeriado,
  "personalInformesJudiciales"
)[1]

document.getElementById('fecha').innerHTML = fechaActual;
document.getElementById('actualManianaTecnico').innerHTML = actualTecnicosManiana;
document.getElementById('actualTardeTecnico').innerHTML = actualTecnicosTarde;
document.getElementById('actualManianaAyudantia').innerHTML = actualAyudantiaManiana;
document.getElementById('actualTardeAyudantia').innerHTML = actualAyudantiaTarde;
document.getElementById('actualManianaInformes').innerHTML = actualInformeManiana;
document.getElementById('actualTardeInformes').innerHTML = actualInformeTarde;
import {
  stringToDate,
  diasSemana,
  diferenciaFecha,
  iniciCicloFormateado,
  fechaFormateada,
} from "./date.js";
import { cicloDelDia } from "./ciclos.js";
import { determinaDiaSabado } from "./dom.js";

// Funcion que determina en que numero deberia estar el personal que se reincorpora (para trabajar el fin de semana)
const vueltaDelPersonal = (personal, fecha) => {
  let fechaRegresoArticulo = stringToDate(fecha);
  let diaSabado = diasSemana(fechaRegresoArticulo)[5];
  console.error("dia del sabado " + diaSabado);
  let numeroDiaSabado = determinaDiaSabado(diaSabado, personal)[0];
  console.error("numero del sabado " + numeroDiaSabado);
  return numeroDiaSabado;
};
// Funcion para crear la lista del personal que va rotando segun vuelve de licencia.
export const situacionDelPersonal = (personal, fecha) => {
  let orden = [];
  let proximasLicencias = [];
  let filtro_01 = [];
  let filtro_02 = [];
  let filtro_03 = [];
  let filtro_04 = [];
  let conArticulo = [];
  let soloApellido = [];
  let date = fecha;

  //Ordena el personal de mayor a menor de acuerdo al fin de su situacion
  personal.sort(
    (a, b) =>
      new Date(stringToDate(b.finSituacion)).getTime() -
      new Date(stringToDate(a.finSituacion)).getTime()
  );

  // Elimina el personas que se encuentra con articulo segun parametro de fecha | filtro_01
  for (let i = 0; i < personal.length; i++) {
    let inicio = stringToDate(personal[i].inicioSituacion),
      fin = stringToDate(personal[i].finSituacion),
      date = stringToDate(fecha);

    if (date.getTime() >= inicio.getTime() && date.getTime() <= fin.getTime()) {
      conArticulo.push(personal[i]);
    } else {
      filtro_01.push(personal[i]);
    }
  }

  // Elimina el personal que todavía no inicio su articulo segun parametro de fecha | filtro_02
  for (let i = 0; i < filtro_01.length; i++) {
    let inicio = stringToDate(filtro_01[i].inicioSituacion),
      fin = stringToDate(filtro_01[i].finSituacion),
      date = stringToDate(fecha);

    if (date.getTime() <= inicio.getTime()) {
      proximasLicencias.push(filtro_01[i]);
    } else {
      filtro_02.push(filtro_01[i]);
    }
  }

  // Elimina la persona pasadas que en la actualidad tienen articulo | filtro_03
  for (let a = 0; a < conArticulo.length; a++) {
    for (let i = 0; i < filtro_02.length; i++) {
      if (filtro_02[i].apellido == conArticulo[a].apellido) {
        filtro_02.splice(i, i + 1);
      }
    }
  }

  //Elimina los duplicados  | filtro_04
  let hash = {};
  filtro_03 = filtro_02.filter(function (elemento) {
    let go =
      elemento.apellido !== undefined
        ? String(elemento.apellido)
        : "Error, puede que el apellido este mal escrito";

    let exists = !hash[go] || false;

    hash[go] = true;

    return exists;
  });

  // Agregar personal que se reincorpora al numero que trabaja el fin de semana
  let hola;
  for (let i = 0; i < filtro_03.length; i++) {
    let fechaFinalDeArticulo = stringToDate(filtro_03[i].finSituacion),
      unDia = 1000 * 60 * 60 * 24 * 1,
      FinSituacionMasUnDia = fechaFinalDeArticulo.getTime() + unDia,
      fechaIncorporacionPersonal = new Date(FinSituacionMasUnDia),
      fechaIncorporacionPersonalFormateada = fechaFormateada(
        fechaIncorporacionPersonal
      );
    console.log(fecha);
    console.error(fechaIncorporacionPersonalFormateada);
    hola =
      fecha == fechaIncorporacionPersonalFormateada
        ? filtro_03
        : vueltaDelPersonal(filtro_03, fecha);
  }
  console.warn(hola);

  return [filtro_03, proximasLicencias];
};
// Funcion para conocer el personal que se encuentra en servicio
export const personalEnServicio = (personal, fecha) => {
  let personalFiltrado = situacionDelPersonal(personal, fecha)[0];
  return personalFiltrado;
};
// Funcion para conocer el personal que se encuentra con articulo
export const personalConArticulo = (personal, fecha) => {
  return personalRevista(personal, fecha)[0];
};

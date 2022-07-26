import {
  stringToDate,
  diasSemana,
  diferenciaFecha,
  iniciCicloFormateado,
  sumarDias,
  fechaActual,
} from "./date.js";
import { cicloDelDia } from "./ciclos.js";
import { personalTecnico } from "../personal/personal-division-area-tecnica.js";

//Determina el cilo del dia sabado
const determinaDiaSabado = (fecha, personal, area) => {
  let cuentaDias = diferenciaFecha(iniciCicloFormateado, fecha); // ejemplo: 58
  let numServicio = personal.length;
  let arr = cicloDelDia(area, numServicio);

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
// Funcion que determina en que numero deberia estar el personal que se reincorpora (para trabajar el fin de semana)
const vueltaDelPersonal = (personal, fecha) => {
  let fechaRegresoArticulo = stringToDate(fecha);
  let diaSabado = diasSemana(fechaRegresoArticulo)[5];
  let numeroDiaSabado = determinaDiaSabado(diaSabado, personal)[0];
  return numeroDiaSabado;
};

// Funcion para crear la lista del personal que va rotando segun vuelve de licencia.
export const situacionDelPersonal = (personal, fecha) => {
  let proximasLicencias = [],
    conArticulo = [],
    date;

  //Ordena el personal de mayor a menor de acuerdo al fin de su situacion
  personal.sort(
    (a, b) =>
      new Date(stringToDate(b.finSituacion)).getTime() -
      new Date(stringToDate(a.finSituacion)).getTime()
  );
  // Quita el personal que todavía no inician un articulo | filtro_01
  const filtro_01 = (personal, fecha) => {
    let filtro_01 = [];
    for (let i = 0; i < personal.length; i++) {
      let inicio = stringToDate(personal[i].inicioSituacion),
        fin = stringToDate(personal[i].finSituacion),
        date = stringToDate(fecha);

      if (date.getTime() < inicio.getTime()) {
        proximasLicencias.push(personal[i]);
      } else {
        filtro_01.push(personal[i]);
      }
    }
    return [filtro_01, proximasLicencias];
  };
  let primerFiltro = filtro_01(personal, fecha)[0];

  // Quita el personal que se encuentra con articulo segun parametro de fecha | filtro_02
  const filtro_02 = (personal, fecha) => {
    let filtro_02 = [];
    for (let i = 0; i < personal.length; i++) {
      let inicio = stringToDate(personal[i].inicioSituacion),
        fin = stringToDate(personal[i].finSituacion),
        date = stringToDate(fecha);

      if (
        date.getTime() >= inicio.getTime() &&
        date.getTime() <= fin.getTime()
      ) {
        conArticulo.push(personal[i]);
      } else {
        filtro_02.push(personal[i]);
      }
    }
    return [filtro_02, conArticulo];
  };
  let segundoFiltro = filtro_02(primerFiltro, fecha)[0];
  let personalConArticulo = filtro_02(primerFiltro, fecha)[1];



  // Quita la persona pasadas que en la actualidad tienen articulo | filtro_03
  const filtro_03 = (personal, personalConArticulo) => {
    for (let a = 0; a < personalConArticulo.length; a++) {
      for (let i = 0; i < personal.length; i++) {
        if (personal[i].apellido == personalConArticulo[a].apellido) {
          personal.splice(i, i - 1);
        }
      }
    }

    return personal;
  };
  let tercerFiltro = filtro_03(segundoFiltro, personalConArticulo);



  //Elimina los duplicados  del tercer filtro
  let hash = {};
  tercerFiltro = tercerFiltro.filter(function (elemento) {
    let go =
      elemento.apellido !== undefined
        ? String(elemento.apellido)
        : "Error, puede que el apellido este mal escrito";
    let exists = !hash[go] || false;
    hash[go] = true;
    return exists;
  });

  // Agregar personal que se reincorpora al numero que trabaja el fin de semana
  const filtro_04 = (personal, fecha) => {
    let numero;
    var fechaVuelta;
    var personalVuelta
    for (let i = 0; i < personal.length; i++) {
      let finSituacion = stringToDate(personal[i].finSituacion);
      finSituacion = sumarDias(finSituacion, 1);
      if (stringToDate(fecha).getTime() === finSituacion.getTime()) {

        console.warn(finSituacion)
        numero = vueltaDelPersonal(personal, fecha)

        // ACA HAY QUE MOVER EL ARRAY , EL ULTIMO EN INGRESAR AL NUMERO que trabaja el finde
        //personal.splice(0, 0, personal.splice(0, 1)[0]);

        personal.splice(numero, 1, personal[i]);
        //fechaVuelta = fecha
        //personalVuelta = personal[i]
        //console.error(fecha, personal)


      } else {//console.log(fecha, personal)
      }
    }
    return [fechaVuelta, personalVuelta, numero]
  };

  let cuartoFiltro = filtro_04(tercerFiltro, fecha)[1];
  //console.log(cuartoFiltro)


  return [tercerFiltro, conArticulo, proximasLicencias];
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
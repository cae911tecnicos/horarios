//import _, { map } from './underscore/underscore.js';
import {
  fechaActual,
  stringToDate,
  numeroDeSemana,
  girarFechaFormateada,
  diasSemana,
  sumarDias,
  diferenciaFecha,
  iniciCicloFormateado,
  fechaFormateada,
} from "./date.js";

import { cicloDelDia } from "./ciclos.js";
import { personalTecnico } from "../personal/personal-division-area-tecnica.js";
import { personalAyudantia } from "../personal/personal-ayudantia.js";
import { personalInformesJudiciales } from "../personal/personal-seccion-informes-judiciales.js";
import { determinaCicloDelDia } from "./dom.js";

// Funcion que determina en que numero deberia estar el personal que se reincorpora (para trabajar el fin de semana)
const vueltaDelPersonal = (personal, fecha) => {
  // Agrega el personal que se reincorporo al Numero que le toca ese fin de semana
  let fechaRegresoArticulo = stringToDate(fecha);
  // ↓ Para saber el dia sabado de la semana en la que vuelve el personal
  let diaSabado = diasSemana(fechaRegresoArticulo)[5];
  //Determina el cilo del dia sabado

  /// -----------------
  const determinaDia = (fecha, personal) => {
    let cuentaDias = diferenciaFecha(iniciCicloFormateado, fecha); // ejemplo: 58
    let numServicio = personal.length;
    let arr = cicloDelDia(personal, numServicio);

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
  let numeroDiaSabado = determinaDia(diaSabado, personal)[0];

  /*   for (let i = 0; i < filtro_02.length; i++) {
    if (filtro_02[i].inicioSituacion == fecha) {
      console.log("hola")
    } else { console.log("nada por aki") }
  } */
  // FIN PRUEBAS
  return numeroDiaSabado;
};
// Funcion para crear la lista del personal que va rotando segun vuelve de licencia.
export const situacionDelPersonal = (personal, fecha) => {
  let orden = [];
  let proximasLicencias = [];
  let filtro_01 = [];
  let filtro_02 = [];
  let filtro_03 = [];
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


  
  // ACA ESTA EL ERROR!
  //Elimina los duplicados  | filtro_04
  const filtro_04 = filtro_02.filter((element) => {
    // Crea un array con solo los apelidos
    const isDuplicate = soloApellido.includes(element.apellido);

    if (!isDuplicate) {
      soloApellido.push(element.apellido);
      return true;
    }
    return false;
  });
  

  

  //console.log(fecha)
  //console.log(filtro_04)
  //console.log("----")
  //console.log("LoDash output", _.uniq(filtro_04));

  // Agregar personal que se reincorpora al numero que trabaja el fin de semana
/*   let filtro_05, personalReincorporado, numDePosicion;

  for (let i = 0; i < filtro_04.length; i++) {
    let fechaFinalDeArticulo = stringToDate(filtro_04[i].finSituacion);
    let unDia = 1000 * 60 * 60 * 24 * 1;
    let sumaUnDia = fechaFinalDeArticulo.getTime() + unDia;
    let fechaIncorporacionPersonal = new Date(sumaUnDia);
    let fechaIncorporacionPersonalFormateada = fechaFormateada(
      fechaIncorporacionPersonal
    );
    if (fecha === fechaIncorporacionPersonalFormateada) {
      numDePosicion = vueltaDelPersonal(filtro_04, fecha);
      personalReincorporado = filtro_04[i];
    }
  } */
  
  return [filtro_02, proximasLicencias];
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




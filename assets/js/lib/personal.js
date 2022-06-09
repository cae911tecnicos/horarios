import { fechaActual, stringToDate, numeroDeSemana,girarFechaFormateada,diasSemana, sumarDias,  } from "./date.js";
//import {determinaCicloDelDia, } from "./dom.js"
import { personalTecnico, } from "../personal/personal-division-area-tecnica.js";

// Funcion Lista del personal de la Division Area Tecnica:
export const listaPersonal = (personal) => {
  let arr = [];
  for (let i = 0; i < personal.length; i++) {
    arr.push(personal[i].apellido);
  }
  return arr;
};
// Funcion para conocer la situacion de revista del personal
export const personalRevista = (personal, fecha) => {
  let personalFiltrado = listaOrdenPersonal(personal, fecha)[0];

  let articulo = [];
  let enServicio = [];
  for (let i = 0; i < personalFiltrado.length; i++) {
    let inicio = stringToDate(personalFiltrado[i].inicioSituacion);
    let fin = stringToDate(personalFiltrado[i].finSituacion);
    let date = stringToDate(fecha);
    if (date.getTime() >= inicio.getTime() && date.getTime() <= fin.getTime()) {
      articulo.push(personalFiltrado[i]);
    } else {
      enServicio.push(personalFiltrado[i]);
    }
  }

  return [articulo, enServicio];
};
// Funcion para conocer el personal que se encuentra en servicio
export const personalEnServicio = (personal, fecha) => {
  let personalFiltrado = listaOrdenPersonal(personal, fecha)[0];
  return personalRevista(personal, fecha)[1];
};
// Funcion para conocer el personal que se encuentra con articulo
export const personalConArticulo = (personal, fecha) => {
  return personalRevista(personal, fecha)[0];
};

/* export const prueba = (personal, fecha) => {
  let arr = [];
  for (let i = 0; i < personal.length; i++) {
    let fin = stringToDate(personal[i].finSituacion);
    let date = stringToDate(fecha);
    if (date.getTime() < fin.getTime()) {
      arr.push(personal[i]);
    }
  }

  return arr;
}; */

// Funcion para crear la lista del personal que va rotando segun vuelve de licencia.
export const listaOrdenPersonal = (personal, fecha) => {
  let orden = [];
  let proximasLicencias = [];
  let filtro_01 = [];
  let filtro_02 = [];
  let filtro_03 = [];
  let conArticulo = [];
  let soloApellido = [];
  let enServicio = [];
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
  const filtro_04 = filtro_02.filter((element) => {
    // Crea un array con solo los apelidos
    const isDuplicate = soloApellido.includes(element.apellido);

    if (!isDuplicate) {
      soloApellido.push(element.apellido);
      return true;
    }
    return false;
  });
  
  // Agrega el personal que se reincorporo al Numero que le toca ese fin de semana
  // INICIO PRUEBASSS
  let fechaRegresoArticulo = stringToDate(fecha)
  // ↓ Para saber el dia sabado de la semana en la que vuelve el personal
  let diaSabado = diasSemana(fechaRegresoArticulo)[5]
  //Determina el cilo del dia sabado
  //let numeroDiaSabado = determinaCicloDelDia(diaSabado)
  console.error(fecha)
  console.log(diaSabado)
  console.warn(numeroDiaSabado)
  console.log("-----")

 

  //console.log(numeroDeSemana(fecha));
/*   for (let i = 0; i < filtro_02.length; i++) {
    if (filtro_02[i].inicioSituacion == fecha) {
      console.log("hola")
    } else { console.log("nada por aki") }

  } */
  // FIN PRUEBAS 
  return [filtro_04, proximasLicencias];
};


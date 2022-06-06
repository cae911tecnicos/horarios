import { fechaActual, stringToDate } from "./date.js";
import { personalTecnico } from "../personal/personal-division-area-tecnica.js";

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
  let articulo = [];
  let enServicio = [];
  for (let i = 0; i < personal.length; i++) {
    let inicio = stringToDate(personal[i].inicioSituacion);
    let fin = stringToDate(personal[i].finSituacion);
    let date = stringToDate(fecha);
    if (date.getTime() >= inicio.getTime() && date.getTime() <= fin.getTime()) {
      articulo.push(personal[i]);
    } else {
      enServicio.push(personal[i]);
    }
  }

  return [articulo, enServicio];
};
// Funcion para conocer el personal que se encuentra en servicio
export const personalEnServicio = (personal, fecha) => {
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
  personal.sort(
    (a, b) =>
      new Date(stringToDate(b.finSituacion)).getTime() -
      new Date(stringToDate(a.finSituacion)).getTime()
  );

  //
  /*   for (let i = 0; i < personal.length; i++) {
    let inicio = stringToDate(personal[i].inicioSituacion),
      fin = stringToDate(personal[i].finSituacion),
      date = stringToDate(fecha);

    if (date.getTime() >= inicio.getTime() && date.getTime() <= fin.getTime()) {
      articulo.push(personal[i]);
    } else {
      enServicio.push(personal[i]);
    }
  } */

  return personal;
};



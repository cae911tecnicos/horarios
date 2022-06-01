import { fechaActual, fechaFormateada, stringToDate } from "./date.js";

// Funcion Lista del personal de la Division Area Tecnica:
export const listaPersonal = (personal) => {
  let arr = [];
  for (let i = 0; i < personal.length; i++) {
    arr.push(personal[i].nombre);
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

// PERSONAL DIVISION AREA TECNICA
export let personalTecnico = [
  {
    nombre: "Saucedo F.",
    situacion: "Licencia",
    inicioSituacion: "14-03-2022",
    finSituacion: "02-04-2022",
  },
  {
    nombre: "Knuttzen G.",
    situacion: "Licencia",
    inicioSituacion: "03-05-2022",
    finSituacion: "30-05-2022",
  },
  {
    nombre: "Garigliano M.",
    situacion: "Licencia",
    inicioSituacion: "18-02-2022",
    finSituacion: "05-04-2022",
  },
  {
    nombre: "Gerometta M.",
    situacion: "Licencia",
    inicioSituacion: "22-04-2022",
    finSituacion: "01-05-2022",
  },
];

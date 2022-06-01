import { fechaActual, fechaFormateada } from "./date.js";

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
    //arr.push(personal[i].nombre)
    if (
      personal[i].inicioSituacion <= fecha &&
      personal[i].finSituacion >= fecha
    ) {
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
    finSituacion: "2-5-2022",
  },
  {
    nombre: "Gerometta M.",
    situacion: "Licencia",
    inicioSituacion: "22-04-2022",
    finSituacion: "01-05-2022",
  },
  {
    nombre: "Knuttzen G.",
    situacion: "Licencia",
    inicioSituacion: "03-05-22",
    finSituacion: "30-05-2022",
  },
  {
    nombre: "Garigliano M.",
    situacion: "Licencia",
    inicioSituacion: "18-02-22",
    finSituacion: "05-04-2022",
  },
];

let fechaAleatorio = fechaFormateada(new Date(2022, 6, 5)) // 05-06-2022
console.log(fechaAleatorio)
let s = personalTecnico[1].inicioSituacion
console.warn(s)

export let personalConArticulo = personalRevista(personalTecnico,fechaActual)[0];
export let personalEnServicio = personalRevista(personalTecnico,fechaAleatorio)[1];
export let numeroCiclo = personalEnServicio.length;

//console.warn(personalEnServicio.length, fechaActual);
//console.table(personalConArticulo);
// 
// console.warn(personalEnServicio.length)



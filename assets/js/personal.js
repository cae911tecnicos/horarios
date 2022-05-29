import { fechaActual } from "./date.js";

// Funcion Lista del personal de la Division Area Tecnica:
const listaPersonal = (personal) => {
  let arr = [];
  for (let i = 0; i < personal.length; i++) {
    arr.push(personal[i].nombre);
  }
  return arr;
};
// Funcion para conocer la situacion de revista del personal
const personalRevista = (personal) => {
  let articulo = [];
  let enServicio = [];
  for (let i = 0; i < personal.length; i++) {
    //arr.push(personal[i].nombre)
    if (
      personal[i].inicioSituacion <= fechaActual &&
      personal[i].finSituacion >= fechaActual
    ) {
      articulo.push(personal[i]);
    } else {
      enServicio.push(personal[i]);
    }
  }
  return [articulo, enServicio];
};

// PERSONAL DIVISION AREA TECNICA
let personalTecnico = [
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

let personalConArticulo = personalRevista(personalTecnico)[0];
let personalEnServicio = personalRevista(personalTecnico)[1];

console.table(personalEnServicio);
console.table(personalConArticulo);

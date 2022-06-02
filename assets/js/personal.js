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

export const prueba = (personal, fecha) => {
  let arr = [];
  for (let i = 0; i < personal.length; i++) {
    let fin = stringToDate(personal[i].finSituacion);
    let date = stringToDate(fecha);
    if (date.getTime() < fin.getTime() ) {
      arr.push(personal[i]);
    } 
  }

  return arr;
};

// Funcion para crear la lista del personal que va rotando segun vuelve de licencia
export const listaOrdenPersonal = (personal, fecha) => {

  let arr = [];
  for (let i = 0; i < personal.length; i++) {
    let fin = stringToDate(personal[i].finSituacion);
    let date = stringToDate(fecha);
    if (date.getTime() >= fin.getTime() ) {
      arr.push(personal[i]);
    } 
  }
  
  arr.sort(
    (a, b) =>
      new Date(stringToDate(b.finSituacion)).getTime() -
      new Date(stringToDate(a.finSituacion)).getTime()
  );
  return personal;
};

// PERSONAL DIVISION AREA TECNICA
export let personalTecnico = [
  {
    nombre: "Fernando",
    apellido: "Saucedo",
    situacion: "Licencia",
    // original
/*     inicioSituacion: "14-03-2022",
    finSituacion: "02-04-2022", */
    // prueba
    inicioSituacion: "02-08-2022",
    finSituacion: "20-08-2022",
  },
  {
    nombre: "Gabriel",
    apellido: "Knuttzen",
    situacion: "Licencia",
    inicioSituacion: "03-05-2022",
    finSituacion: "30-05-2022",
  },
  {
    nombre: "Milton",
    apellido: "Gerometta",
    situacion: "Licencia",
    inicioSituacion: "18-02-2022",
    finSituacion: "05-04-2022",
  },
  {
    nombre: "Mauricio",
    apellido: "Garigliano",
    situacion: "Licencia",
    inicioSituacion: "22-04-2022",
    finSituacion: "01-05-2022",
  },
];

console.table(listaOrdenPersonal(personalTecnico,"31-04-2022"));
console.log("31-04-2022")
console.table(prueba(personalTecnico,"31-04-2022"));

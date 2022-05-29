import { hoy, formatFecha } from "./date.js";
const fechaActual = formatFecha(hoy);

// inicio - PERSONAL DIVISION AREA TECNICA
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

/* console.log(personalTecnico[1].nombre);
console.log(personalTecnico.length); */


//Lista del personal de la Division Area Tecnica:
const listaPersonal = (personal) => {
  let arr = []
  for(let i = 0; i < personal.length;i++){
    arr.push(personal[i].nombre)
  }
  return arr
}
// fin - DIVISION PERSONAL AREA TECNICA

// Funcion para conocer la situacion de revista de cada personal
const PersonalConArticulo = (personal) => {
  let situacion = []
  for(let i = 0; i < personal.length;i++){
    //arr.push(personal[i].nombre)
    if(personal[i].inicioSituacion <= fechaActual && personal[i].finSituacion >= fechaActual ){
      situacion.push(personal[i])
    }
  }
  return situacion
}

console.table(listaPersonal(personalTecnico))
console.table(PersonalConArticulo(personalTecnico))

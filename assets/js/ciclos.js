import { numeroCiclo } from "./personal.js";
//Estos  ciclos estan pensado para que una persona trabaje minimamente 3 veces por semana.
// Cada ciclo dura un numero N de semanas, donde N es igual al numero de personal disponible.
export const ciclo2 = [
  [1, 2, 1, 2, 1, 2, 2],
  [1, 2, 1, 2, 1, 2, 2],
];
export const ciclo3 = [
  [1, 3, 2, 1, 3, 2, 2],
  [2, 1, 3, 2, 1, 2, 2],
];
export const ciclo4 = [
  [1, 3, 1, 4, 2, 4, 4],
  [2, 4, 2, 3, 1, 4, 4],
];
export const ciclo5 = [
  [12, 5, 23, 4, 13, 4, 4],
  [3, 4, 1, 5, 2, 4, 4],
];
export const ciclo6 = [
  [12, 34, 56, 32, 56, 4, 4],
  [56, 2, 1, 4, 13, 4, 4],
];

// Funcion para completar los ciclos
export const rotacion = (arr, personal) => {
  arr = String(arr);
  if (arr.length === 2) {
    arr = arr.split("");
    if (arr.length === 1) {
      arr.unshift(0);
    }

    let a = Number(arr[0]);
    let b = Number(arr[1]);

    a = a < personal ? a + 1 : a === personal ? 1 : 0;
    b = b < personal ? b + 1 : b === personal ? 1 : 0;

    arr = `${a}${b}`;

    return arr;
  } else {
    arr = Number(arr);
    arr = arr < personal ? arr + 1 : arr === personal ? 1 : 0;
    return arr;
  }
};

//---------------------------------
export const cicloDelDia = (numero) => {
  let parametros = `ciclo${numero},${numero}`
  return rotacion(parametros);
};

//console.warn(cicloDelDia(numeroCiclo))
console.warn(rotacion(ciclo6,6))

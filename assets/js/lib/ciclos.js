import { personalInformesJudiciales } from "../personal/personal-seccion-informes-judiciales.js";
import { personalAyudantia } from "../personal/personal-ayudantia.js";

// CICLOS DIVISION AREA TECNIC Y SECCION INFORMES JUDICIALES -----------------------------------------
//Estos  ciclos estan pensado para que una persona trabaje minimamente 3 veces por semana.
// Cada ciclo dura un numero N de semanas, donde N es igual al numero de personal disponible.
export const ciclo_tecnicos_2 = [
  [1, 2, 1, 2, 1, 2, 2],
  [1, 2, 1, 2, 1, 2, 2],
];
export const ciclo_tecnicos_3 = [
  [1, 3, 2, 1, 3, 2, 2],
  [2, 1, 3, 2, 1, 2, 2],
];
export const ciclo_tecnicos_4 = [
  [1, 3, 1, 4, 2, 4, 4],
  [2, 4, 2, 3, 1, 4, 4],
];
export const ciclo_tecnicos_5 = [
  [12, 5, 23, 4, 13, 4, 4],
  [3, 4, 1, 5, 2, 4, 4],
];
export const ciclo_tecnicos_6 = [
  [12, 34, 56, 32, 56, 4, 4],
  [56, 2, 1, 4, 13, 4, 4],
];

// CICLOS DIVISION AYUDANTIA  -----------------------------------------------------------------------
export const ciclo_ayudantia_2 = [
  [1, 2, 1, 2, 1, 2, 2],
  [1, 2, 1, 2, 1, 2, 2],
];
export const ciclo_ayudantia_3 = [
  [12, 12, 12, 12, 12, 1, 1],
  [3, 3, 3, 3, 3, 1, 1],
];
export const ciclo_ayudantia_4 = [
  [12, 41, 34, 23, 12, 4, 4],
  [3, 2, 1, 4, 3, 4, 4],
];
export const ciclo_ayudantia_5 = [
  [12, 45, 23, 51, 34, 1, 1],
  [3, 1, 4, 2, 5, 1, 1],
];
export const ciclo_ayudantia_6 = [
  [12, 34, 56, 32, 56, 4, 4],
  [56, 2, 1, 4, 13, 4, 4],
];

// FUNCIONES PARA SECCION INFORMES JUDICIALES
export const ciclo_informes_judiciales_2 = [
  [1, 2, 1, 2, 1, 2, 2],
  [1, 2, 1, 2, 1, 2, 2],
];
export const ciclo_informes_judiciales_3 = [
  [1, 3, 2, 1, 3, 2, 2],
  [2, 1, 3, 2, 1, 2, 2],
];
export const ciclo_informes_judiciales_4 = [
  [1, 3, 1, 4, 2, 4, 4],
  [2, 4, 2, 3, 1, 4, 4],
];
export const ciclo_informes_judiciales_5 = [
  [12, 5, 23, 4, 13, 4, 4],
  [3, 4, 1, 5, 2, 4, 4],
];
export const ciclo_informes_judiciales_6 = [
  [12, 34, 56, 32, 56, 4, 4],
  [56, 2, 1, 4, 13, 4, 4],
];

// FUNCIONES PARA LOS CICLOS  -----------------------------------------------------------------------

//Funcion para generar la rotacion en las diferentes semanas
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
    arr = Number(arr);

    return arr;
  } else {
    arr = Number(arr);
    arr = arr < personal ? arr + 1 : arr === personal ? 1 : 0;
    return arr;
  }
};

// Funcion para completar y generar los ciclos
const ciclos = (ciclo, personal) => {
  for (let a = 0; a < 2; a++) {
    for (let i = 0; i < 7 * (personal - 1); i++) {
      let aRotar = ciclo[a][i];
      ciclo[a].push(rotacion(aRotar, personal));
    }
  }
  return ciclo;
};
// Funcion para saber el ciclo que tiene el dia de acuerdo al personal
export const cicloDelDia = (area, numero) => {
  if (area == "personalAyudantia") {
    let ciclo =
      numero == 6
        ? ciclos(ciclo_ayudantia_6, 6)
        : numero == 5
        ? ciclos(ciclo_ayudantia_5, 5)
        : numero == 4
        ? ciclos(ciclo_ayudantia_4, 4)
        : numero == 3
        ? ciclos(ciclo_ayudantia_3, 3)
        : numero == 2
        ? ciclos(ciclo_ayudantia_2, 2)
        : "No existe ese ciclo";
    return ciclo;
  } else if (area == "personalInformesJudiciales") {
    let ciclo =
      numero == 6
        ? ciclos(ciclo_informes_judiciales_6, 6)
        : numero == 5
        ? ciclos(ciclo_informes_judiciales_5, 5)
        : numero == 4
        ? ciclos(ciclo_informes_judiciales_4, 4)
        : numero == 3
        ? ciclos(ciclo_informes_judiciales_3, 3)
        : numero == 2
        ? ciclos(ciclo_informes_judiciales_2, 2)
        : "No existe ese ciclo";
    return ciclo;
  } else {
    let ciclo =
      numero == 6
        ? ciclos(ciclo_tecnicos_6, 6)
        : numero == 5
        ? ciclos(ciclo_tecnicos_5, 5)
        : numero == 4
        ? ciclos(ciclo_tecnicos_4, 4)
        : numero == 3
        ? ciclos(ciclo_tecnicos_3, 3)
        : numero == 2
        ? ciclos(ciclo_tecnicos_2, 2)
        : "No existe ese ciclo";
    return ciclo;
  }
};

// este tiene un error

//console.log(cicloDelDia(ciclo_informes_judiciales_5, 5, "ciclo_informes_judiciales_5"))
// Este no tiene error
//console.error(ciclos(ciclo_ayudantia_5, 5))

//console.log(rotacion(ciclo_ayudantia_5[1],5))



import { personalInformesJudiciales } from "../personal/personal-seccion-informes-judiciales.js";
import { personalAyudantia } from "../personal/personal-ayudantia.js";
import { personalTecnico, } from "../personal/personal-division-area-tecnica.js";
// CICLOS DIVISION AREA TECNIC Y SECCION INFORMES JUDICIALES -----------------------------------------

//Estos  ciclos estan pensado para que una persona trabaje minimamente 3 veces por semana.
// Cada ciclo dura un numero N de semanas, donde N es igual al numero de personal disponible.
export const ciclo_2_tecnicos = [
  [1, 2, 1, 2, 1, 2, 2],
  [1, 2, 1, 2, 1, 2, 2],
];
export const ciclo_3_tecnicos = [
  [1, 3, 2, 1, 3, 2, 2],
  [2, 1, 3, 2, 1, 2, 2],
];
export const ciclo_4_tecnicos = [
  [1, 3, 1, 4, 2, 4, 4],
  [2, 4, 2, 3, 1, 4, 4],
];
export const ciclo_5_tecnicos = [
  [12, 5, 23, 4, 13, 4, 4],
  [3, 4, 1, 5, 2, 4, 4],
];
export const ciclo_6_tecnicos = [
  [12, 34, 56, 32, 56, 4, 4],
  [56, 2, 1, 4, 13, 4, 4],
];

// CICLOS DIVISION AYUDANTIA  -----------------------------------------------------------------------
export const ciclo_2_ayudantia = [
  [1, 2, 1, 2, 1, 2, 2],
  [1, 2, 1, 2, 1, 2, 2],
];
export const ciclo_3_ayudantia = [
  [12, 12, 12, 12, 12, 1, 1],
  [3, 3, 3, 3, 3, 1, 1],
];
export const ciclo_4_ayudantia = [
  [12, 41, 34, 23, 12, 4, 4],
  [3, 2, 1, 4, 3, 4, 4],
];
export const ciclo_5_ayudantia = [
  [12, 45, 23, 51, 34, 1, 1],
  [3, 1, 4, 2, 5, 1, 1],
];
export const ciclo_6_ayudantia = [
  [12, 34, 56, 32, 56, 4, 4],
  [56, 2, 1, 4, 13, 4, 4],
];

// FUNCIONES PARA SECCION INFORMES JUDICIALES
export const ciclo_2_informes_judiciales = [
  [1, 2, 1, 2, 1, 2, 2],
  [1, 2, 1, 2, 1, 2, 2],
];
export const ciclo_3_informes_judiciales = [
  [1, 3, 2, 1, 3, 2, 2],
  [2, 1, 3, 2, 1, 2, 2],
];
export const ciclo_4_informes_judiciales = [
  [1, 3, 1, 4, 2, 4, 4],
  [2, 4, 2, 3, 1, 4, 4],
];
export const ciclo_5_informes_judiciales = [
  [12, 5, 23, 4, 13, 4, 4],
  [3, 4, 1, 5, 2, 4, 4],
];
export const ciclo_6_informes_judiciales = [
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

export const cicloDelDia = (personal, numero) => {
  if (personal == personalAyudantia) {
    let ciclo =
      numero == 6
        ? ciclos(ciclo_6_ayudantia, 6)
        : numero == 5
        ? ciclos(ciclo_5_ayudantia, 5)
        : numero == 4
        ? ciclos(ciclo_4_ayudantia, 4)
        : numero == 3
        ? ciclos(ciclo_3_ayudantia, 3)
        : numero == 2
        ? ciclos(ciclo_2_ayudantia, 2)
        : "No existe ese ciclo";
    return ciclo;
  } else if(personal == personalInformesJudiciales) {
    let ciclo =
      numero == 6
        ? ciclos(ciclo_6_informes_judiciales, 6)
        : numero == 5
        ? ciclos(ciclo_5_informes_judiciales, 5)
        : numero == 4
        ? ciclos(ciclo_4_informes_judiciales, 4)
        : numero == 3
        ? ciclos(ciclo_3_informes_judiciales, 3)
        : numero == 2
        ? ciclos(ciclo_2_informes_judiciales, 2)
        : "No existe ese ciclo";
    return ciclo;
  } else{
    let ciclo =
      numero == 6
        ? ciclos(ciclo_6_tecnicos, 6)
        : numero == 5
        ? ciclos(ciclo_5_tecnicos, 5)
        : numero == 4
        ? ciclos(ciclo_4_tecnicos, 4)
        : numero == 3
        ? ciclos(ciclo_3_tecnicos, 3)
        : numero == 2
        ? ciclos(ciclo_2_tecnicos, 2)
        : "No existe ese ciclo";
    return ciclo;
  }
};

//console.table(ciclos(ciclo6, 6))
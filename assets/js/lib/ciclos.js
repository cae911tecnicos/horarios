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
  [14, 3, 24, 5, 12, 4, 4],
  [2, 5, 1, 3, 5, 4, 4],
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
  [14, 3, 24, 5, 12, 4, 4],
  [2, 5, 1, 3, 5, 4, 4],
];
export const ciclo_informes_judiciales_6 = [
  [12, 34, 56, 32, 56, 4, 4],
  [56, 2, 1, 4, 13, 4, 4],
];

// FUNCIONES PARA LOS CICLOS  -----------------------------------------------------------------------

//Funcion para generar la rotacion en las diferentes semanas
export const rotacion = (arr, num) => {
  let resultado;
  let aux_1;
  let aux_2;
  arr = String(arr);
  if (arr.length === 2) {
    arr = arr.split("");
    let arr_1 = Number(arr[0]);
    let arr_2 = Number(arr[1]);

    aux_1 = arr_1 + 1;
    aux_2 = arr_2 + 1;

    // --
    aux_1 = Number(arr);
    aux_2 = Number(arr);

    arr_1 = arr_1 !== num || aux_1 < num ? arr_1 + 1 : (arr_1 = 1);
    arr_2 = arr_2 !== num || aux_2 < num ? arr_2 + 1 : (arr_2 = 1);

    resultado = `${arr_1}${arr_2}`;
    resultado = Number(resultado);

    return resultado;
  } else {
    arr = Number(arr);
    aux_1 = arr + 1;
    let resultado = arr !== num || aux_1 < num ? arr + 1 : (arr = 1);
    return resultado;
  }
};

// Funcion para completar y generar los ciclos
export const ciclos = (ciclo, num) => {
  let auxA = JSON.parse(JSON.stringify(ciclo[0]));
  let auxB = JSON.parse(JSON.stringify(ciclo[1]));
  let a = [];
  let b = [];
  let parteA = [...auxA];
  let parteB = [...auxB];
  let cicloCompleto = [];

  // APARTE A
  for (let semana = 0; semana < num; semana++) {
    for (let i = 0; i < 7; i++) {
      let posicion = rotacion(auxA[i], num);
      auxA.push(posicion);
    }
    auxA.splice(0, 7);
    parteA = [...parteA, ...auxA];
  }
  parteA.splice(num * 7, 7);
  // APARTE B
  for (let semana = 0; semana < num; semana++) {
    for (let i = 0; i < 7; i++) {
      let posicion = rotacion(auxB[i], num);
      auxB.push(posicion);
    }
    auxB.splice(0, 7);
    parteB = [...parteB, ...auxB];
  }
  parteB.splice(num * 7, 7);

  cicloCompleto.push(parteA);
  cicloCompleto.push(parteB);

  return cicloCompleto;
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
// CICLOS DIVISION AREA TECNIC Y SECCION INFORMES JUDICIALES -----------------------------------------

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

export const cicloDelDia = (numero) => {
  let ciclo =
    numero == 6
      ? ciclos(ciclo6, 6)
      : numero == 5
      ? ciclos(ciclo5, 5)
      : numero == 4
      ? ciclos(ciclo4, 4)
      : numero == 3
      ? ciclos(ciclo3, 3)
      : numero == 2
      ? ciclos(ciclo3, 2)
      : "No existe ese ciclo";
  return ciclo;
};

// CICLOS DIVISION AYUDANTIA  -----------------------------------------------------------------------

export const ciclo_2_ayudantia = [
  [1, 2, 1, 2, 1, 2, 2],
  [1, 2, 1, 2, 1, 2, 2],
];
export const ciclo_3_ayudantia = [
  [1, 3, 2, 1, 3, 2, 2],
  [2, 1, 3, 2, 1, 2, 2],
];
export const ciclo_4_ayudantia = [
  [1, 3, 1, 4, 2, 4, 4],
  [2, 4, 2, 3, 1, 4, 4],
];
export const ciclo_5_ayudantia = [
  [12, 5, 23, 4, 13, 4, 4],
  [3, 4, 1, 5, 2, 4, 4],
];
export const ciclo_6_ayudantia = [
  [12, 34, 56, 32, 56, 4, 4],
  [56, 2, 1, 4, 13, 4, 4],
];
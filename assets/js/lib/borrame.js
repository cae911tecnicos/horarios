const ciclo_tecnicos_2 = [
  [1, 2, 1, 2, 1, 2, 2],
  [1, 2, 1, 2, 1, 2, 2],
];
const ciclo_tecnicos_3 = [
  [1, 3, 2, 1, 3, 2, 2],
  [2, 1, 3, 2, 1, 2, 2],
];
const ciclo_tecnicos_4 = [
  [1, 3, 1, 4, 2, 4, 4],
  [2, 4, 2, 3, 1, 4, 4],
];
const ciclo_tecnicos_5 = [
  [12, 5, 23, 4, 13, 4, 4],
  [3, 4, 1, 5, 2, 4, 4],
];
const ciclo_tecnicos_6 = [
  [12, 34, 56, 32, 56, 4, 4],
  [56, 2, 1, 4, 13, 4, 4],
];
// Funcion para completar el ciclo
const rotacion = (arr, num) => {
  let aux_1;
  let aux_2;
  arr = String(arr);
  if (arr.length === 2) {
    arr = arr.split("");
    if (arr.length === 1) {
      arr.unshift(0);
    }

    let aa = Number(arr[0]);
    let bb = Number(arr[1]);

    aux_1 = aa + 1;
    aux_2 = bb + 1;

    let a = arr !== aa || aux_1 < aa ? arr + 1 : (arr = 1);
    let b = arr !== bb || aux_2 < bb ? arr + 1 : (arr = 1);

    arr = `${a}${b}`;
    arr = Number(arr);

    return arr;
  } else {
    arr = Number(arr);
    aux_1 = arr + 1;
    let resultado = arr !== num || aux_1 < num ? arr + 1 : (arr = 1);
    return resultado;
  }
};

// Funcion para completar y generar los ciclos
const ciclos = (ciclo, num) => {
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

console.log(ciclos(ciclo_tecnicos_4, 4));

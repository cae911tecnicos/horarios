const ciclo_tecnicos_4 = [
  [1, 3, 1, 4, 2, 4, 4],
  [2, 4, 2, 3, 1, 4, 4],
];

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
      a = auxA[i] + 1;
      b = auxA[i] !== num || a < num ? auxA[i] + 1 : (auxA[i] = 1);

      auxA.push(b);
    }
    auxA.splice(0, 7);
    parteA = [...parteA, ...auxA];
  }
  parteA.splice(28, 7);
  // APARTE B
  for (let semana = 0; semana < num; semana++) {
    for (let i = 0; i < 7; i++) {
      a = auxB[i] + 1;
      b = auxB[i] !== num || a < num ? auxB[i] + 1 : (auxB[i] = 1);

      auxB.push(b);
    }
    auxB.splice(0, 7);
    parteB = [...parteB, ...auxB];
  }
  parteB.splice(28, 7);

  cicloCompleto.push(parteA)
  cicloCompleto.push(parteB)

  return cicloCompleto;
};

console.error(ciclos(ciclo_tecnicos_4, 4));

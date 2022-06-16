const ciclo_tecnicos_4 = [
  [1, 3, 1, 4, 2, 4, 4],
  [2, 4, 2, 3, 1, 4, 4],
];

// Funcion para completar y generar los ciclos
const ciclos = (ciclo, num) => {
  let cicloCompleto = [];
  let aux = JSON.parse(JSON.stringify(ciclo[0]));
  let a = [];
  let b = [];
  cicloCompleto = [...aux];
  console.warn(cicloCompleto);

  for (let semana = 0; semana < num; semana++) {
    for (let i = 0; i < 7; i++) {
      a = aux[i] + 1;
      b = aux[i] !== num || a < num ? aux[i] + 1 : (aux[i] = 1);

      aux.push(b);
    }
    aux.splice(0, 7);
    cicloCompleto = [...cicloCompleto, ...aux];
    console.warn(aux);
  }
  cicloCompleto.splice(28, 7);

  return cicloCompleto;
};

console.error(ciclos(ciclo_tecnicos_4, 4));

// Funciones ====================================================================
//Para saber el dia de la semana
const numeroDeSemana = (fecha) => {
  const DIA_EN_MILISEGUNDOS = 1000 * 60 * 60 * 24,
    DIAS_QUE_TIENE_UNA_SEMANA = 7,
    JUEVES = 4;
  fecha = new Date(
    Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate())
  );
  let diaDeLaSemana = fecha.getUTCDay(); // Domingo es 0, sábado es 6
  if (diaDeLaSemana === 0) {
    diaDeLaSemana = 7;
  }
  fecha.setUTCDate(fecha.getUTCDate() - diaDeLaSemana + JUEVES);
  const inicioDelAño = new Date(Date.UTC(fecha.getUTCFullYear(), 0, 1));
  const diferenciaDeFechasEnMilisegundos = fecha - inicioDelAño;
  return Math.ceil(
    (diferenciaDeFechasEnMilisegundos / DIA_EN_MILISEGUNDOS + 1) /
      DIAS_QUE_TIENE_UNA_SEMANA
  );
};
//Funcion para sumar dias de la semana
function sumarDias(fecha, dias) {
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}
//Para Formatear fecha (envia un date y convierte en string ej.: 08-07-2022)
const formatFecha = (fecha) => {
  const anio = fecha.getFullYear(),
    numDia = String(fecha.getDate()).padStart(2, "0"),
    numMes = String(fecha.getMonth() + 1).padStart(2, "0"),
    actual = `${numDia}-${numMes}-${anio}`;
  return actual;
};
//Para saber saber los dias de la semana
const diasSemana = (fecha) => {
  const actual = formatFecha(fecha);
  (numPositivo = []), (numNegativo = []), (numSemana = numeroDeSemana(fecha));

  for (let i = 0; i < 7; i++) {
    let positivo = sumarDias(fecha, 1),
      positivoNumDiaSemana = numeroDeSemana(fecha);

    if (numSemana === positivoNumDiaSemana) {
      numPositivo[i] = formatFecha(positivo);
    }
  }

  for (let i = -7; i <= 7; i++) {
    let negativo = sumarDias(fecha, -1),
      negativoNumDiaSemana = numeroDeSemana(fecha);

    if (numSemana === negativoNumDiaSemana) {
      numNegativo[i] = formatFecha(negativo);
    }
  }

  let semana = [...numNegativo, actual, ...numPositivo];

  // Ordena codigo
  semana.sort();
  semana.sort((a, b) => {
    let parteA = a.slice(3, 5);
    let partesB = b.slice(3, 5);
    return parteA - partesB;
  });
  // Fin ordena codigo

  return semana;
};
//Fin  Funciones ================================================================

// Constantes y Variables =======================================================
const semana0 = new Date(),
  semana1 = new Date(),
  semana2 = new Date(),
  semana3 = new Date(),
  semana4 = new Date(),
  arrSemana0 = diasSemana(semana0),
  arrSemana1 = diasSemana(sumarDias(semana1, 7)),
  arrSemana2 = diasSemana(sumarDias(semana2, 14)),
  arrSemana3 = diasSemana(sumarDias(semana3, 21)),
  arrSemana4 = diasSemana(sumarDias(semana4, 28));
//Fin  Constantes y Variables ===================================================

//Inicio Manipulacion DOM ==========================================================================
// Funcion Crear secuencias de Dias
const secuenciaDias = (arrSemana, num) => {
  const etiquetaSemana = document.querySelector(`#semana${num}`);

  for (let i = 0; i < 7; i++) {
    const diaSemana = document.createElement("td");
    diaSemana.innerText = arrSemana[i];
    etiquetaSemana.append(diaSemana);
  }
};

secuenciaDias(arrSemana0, 0);
secuenciaDias(arrSemana1, 1);
secuenciaDias(arrSemana2, 2);
secuenciaDias(arrSemana3, 3);
secuenciaDias(arrSemana4, 4);
//Fin Manipulacion DOM ==========================================================================

// Inicio Ciclos ==================================================================
const ciclo2 = [
    [01, 02, 01, 02, 01, 02, 02],
    [01, 02, 01, 02, 01, 02, 02],
  ],
  ciclo3 = [
    [01, 03, 02, 01, 03, 02, 02],
    [02, 01, 03, 02, 01, 02, 02],
  ],
  ciclo4 = [
    [01, 03, 01, 04, 02, 04, 04],
    [02, 04, 02, 03, 01, 04, 04],
  ],
  ciclo5 = [
    [12, 05, 23, 04, 13, 04, 04],
    [03, 04, 01, 05, 02, 04, 04],
  ],
  ciclo6 = [
    [12, 34, 56, 32, 56, 04, 04],
    [56, 02, 01, 04, 13, 04, 04],
  ];

// Funcion para completar los ciclos
const rotacion = (arr, personal) => {
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

const ciclos = (ciclo, personal) => {
  for (let a = 0; a < 2; a++) {
    for (let i = 0; i < 7 * (personal - 1); i++) {
/*       let prueba = ciclo[a][i];
      let rotacion =
        ciclo[a].slice()[i] < personal
          ? ciclo[a].slice()[i] + 1
          : (ciclo[a].slice()[i] = 1); */
          let aRotar = ciclo[a][i]

      ciclo[a].push(rotacion(aRotar, personal));
    }
  }

  return ciclo;
};

console.log(ciclos(ciclo2, 2));

// Fin Ciclos ==================================================================

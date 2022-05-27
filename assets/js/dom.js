import { numeroDeSemana, sumarDias, diasSemana } from "./date.js";

const semana0 = new Date(),
  semana1 = new Date(),
  semana2 = new Date(),
  semana3 = new Date(),
  semana4 = new Date();

export const arrSemana0 = diasSemana(semana0);
export const arrSemana1 = diasSemana(sumarDias(semana1, 7));
export const arrSemana2 = diasSemana(sumarDias(semana2, 14));
export const arrSemana3 = diasSemana(sumarDias(semana3, 21));
export const arrSemana4 = diasSemana(sumarDias(semana4, 28));

// Funcion Crear secuencias de Dias
export const secuenciaDias = (arrSemana, num) => {
  const etiquetaSemana = document.querySelector(`#semana${num}`);

  for (let i = 0; i < 7; i++) {
    const diaSemana = document.createElement("td");
    diaSemana.innerText = arrSemana[i];
    etiquetaSemana.append(diaSemana);
  }

  const etiquetaManiana = document.querySelector(`#maniana${num}`);

  for (let i = 0; i < 7; i++) {
    const diaSemana = document.createElement("td");
    diaSemana.innerText = arrSemana[i];
    etiquetaManiana.append(diaSemana);
  }

  const etiquetaTarde = document.querySelector(`#tarde${num}`);

  for (let i = 0; i < 7; i++) {
    const diaSemana = document.createElement("td");
    diaSemana.innerText = "hola";
    etiquetaTarde.append(diaSemana);
  }

  // inicio prueba--------------------
  /*   let prueba = ciclos(ciclo3, 3);
  let pruebaContador = 58;
  let arr = prueba;

  while (arr[1].length < pruebaContador) {
    arr[1] = [...arr[1], ...arr[1]];
  }

  console.warn(arr[1].length); // = 84
  console.log(arr[1][pruebaContador]); */
  // fin prueba--------------------
};

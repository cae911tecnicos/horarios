import {
  sumarDias,
  diasSemana,
  iniciCicloFormateado,
  diferenciaFecha,
} from "./date.js";


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
    let fechaDelDia = arrSemana[i];
    const diaSemana = document.createElement("td");
    diaSemana.innerText = iniciCicloFormateado - fechaDelDia;
    etiquetaTarde.append(diaSemana);
  }

  // inicio prueba--------------------
  /*   

  // Funcion que determina que ciclo debe tener un dia especifico
  const cicloDelDia = (numero) => {return `ciclo[${numero}], [${numero}]`};
  }

  let cuentaDias = iniciCicloFormateado, arrSemana0[i]; // ejemplo: 58
  let arr = cicloDelDia;

  while (arr[1].length < cuentaDias) {
    arr[1] = [...arr[1], ...arr[1]];
  }

  console.warn(arr[1].length); // = 84
  console.log(arr[1][cuentaDias]);
   */
  // fin prueba--------------------
};

console.log(diferenciaFecha(iniciCicloFormateado, arrSemana0[2]));

let numPositivo = [],
  numNegativo = [],
  numSemana = [];  

//Para saber el dia de la semana
export const numeroDeSemana = (fecha) => {
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
export function sumarDias(fecha, dias) {
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}
//Para Formatear fecha (envia un date y convierte en string ej.: 08-07-2022)
export const formatFecha = (fecha) => {
  const anio = fecha.getFullYear(),
    numDia = String(fecha.getDate()).padStart(2, "0"),
    numMes = String(fecha.getMonth() + 1).padStart(2, "0"),
    actual = `${numDia}-${numMes}-${anio}`;
  return actual;
};
//Para saber saber los dias de la semana
export const diasSemana = (fecha) => {
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

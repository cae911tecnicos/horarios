const ciclo_tecnicos_4 = [
    [1, 3, 1, 4, 2, 4, 4],
    [2, 4, 2, 3, 1, 4, 4],
];

// Funcion para completar y generar los ciclos
const ciclos = (ciclo, num) => {
    console.log(ciclo[0])
    let cicloCompleto = []
    //let hola = JSON.parse(JSON.stringify(ciclo))
    let aux = []
    for (let i = 0; i < 7; i++) {
        let a = (ciclo[0][i]) + 1
        let b = (ciclo[0][i] !== num || a < num) ? (ciclo[0][i]) + 1 : ciclo[0][i] = 1

        aux.push(b)
    }
    cicloCompleto[0] = [...cicloCompleto, ...aux]

    return cicloCompleto;
};

console.error(ciclos(ciclo_tecnicos_4, 4))
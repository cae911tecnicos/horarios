const ciclo_tecnicos_4 = [
    [1, 3, 1, 4, 2, 4, 4],
    [2, 4, 2, 3, 1, 4, 4],
];

// Funcion para completar y generar los ciclos
const ciclos = (ciclo, num) => {
    console.log(ciclo[0])
    let cicloCompleto = []
    let base = JSON.parse(JSON.stringify(ciclo))
    let aux = []
    for (let i = 0; i < 7; i++) {
        let a = (ciclo[0][i]) + 1
        let b = (ciclo[0][i] !== num || a < num) ? (ciclo[0][i]) + 1 : ciclo[0][i] = 1

        aux.push(b)
        
    }
    let copia = JSON.parse(JSON.stringify(aux))
    cicloCompleto[0] = [...base[0], ...cicloCompleto, ...copia]

    return cicloCompleto;
};

console.error(ciclos(ciclo_tecnicos_4, 4))
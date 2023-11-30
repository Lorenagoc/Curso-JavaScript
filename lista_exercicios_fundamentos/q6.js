function jurosSimples(capital, taxa, tempo) {
    return (capital + (capital * taxa)) * tempo;
}


function jurosCompostos(capital, taxa, tempo) {
    for (let i = tempo; i > 0; i--) {
        capital = capital + (capital * taxa);
    }

    return capital;
}

console.log("Juros Simples: ", jurosSimples(100, 0.5, 5));
console.log("Juros Compostos: ", jurosCompostos(100, 0.5, 5));
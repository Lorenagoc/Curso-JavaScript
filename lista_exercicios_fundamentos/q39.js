function troca(vetor1, vetor2) {

    console.log("Vetor A = ", vetor1);
    console.log("Vetor B = ", vetor2);

    let tamanho_inicial = vetor1.length;

    while (vetor2.length > 0) {
        vetor1.push(vetor2.pop());
    }

    while (vetor1.length > tamanho_inicial) {
        vetor2.unshift(vetor1.shift());
    }

    console.log();
    console.log("Depois da troca ... ");
    console.log();

    console.log("Vetor A = ", vetor1);
    console.log("Vetor B = ", vetor2);

}

troca([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]);
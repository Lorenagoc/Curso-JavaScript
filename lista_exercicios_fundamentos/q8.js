function record(pontuacao) {
    let melhor_pontuacao = pontuacao[0];
    let pior_pontuacao = pontuacao[0];
    let indice_pior_pontuacao = 0;
    let record = 0;
    for (let i = 1; i < pontuacao.length; i++) {
        if (pontuacao[i] > melhor_pontuacao) {
            melhor_pontuacao = pontuacao[i];
            record++;
        } else if (pontuacao[i] < pior_pontuacao) {
            pior_pontuacao = pontuacao[i];
            indice_pior_pontuacao = i;
        }
    }

    return [record, indice_pior_pontuacao + 1];
}

console.log(record([10, 20, 20, 8, 25, 3, 0, 30, 1]))
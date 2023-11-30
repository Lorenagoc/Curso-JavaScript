/**
 * Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
 */

function nomeDoMes(numero) {
    return numero == 1 ? "Janeiro" : (numero == 2 ? "Fevereiro" : (numero == 3 ? "Março" : (numero == 4 ? "Março" : (numero == 5) ? "Maio" : (numero == 6) ? "Junho" : (numero == 7) ? "Julho" : (numero == 8) ? "Agosto" : (numero == 9) ? "Setembro" : (numero == 10) ? Outubro : (numero == 11) ? "Novembro" : "Dezembro")));
}

console.log(nomeDoMes(9));
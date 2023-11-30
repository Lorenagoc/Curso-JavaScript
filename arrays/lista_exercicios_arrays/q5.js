/**
 * Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
 */

function maiorOuIgual(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) return false;
    return primeiro >= segundo;
}

console.log(maiorOuIgual(5, 1));
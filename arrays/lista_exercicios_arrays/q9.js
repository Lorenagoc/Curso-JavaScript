/**
 * Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
 */

function repetir (repetido, repetidor) {
    let resultado = [];
    while(resultado.length < repetidor) {
        resultado.push(repetido);
    }

    return resultado;
}

console.log(repetir(7, 3));
/**
 * Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
 */

function simboloMais (param) {
    let resultado = [];
    while(resultado.length < param) {
        resultado = resultado + "+";
    }

    return resultado;
}

console.log(simboloMais(4));
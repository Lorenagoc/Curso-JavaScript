/**
 * Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
 */

function multiplicar(n1, n2) {
    let resultado = 0;
    for (let i = 0; i < n2; i++) resultado = resultado + n1;
    return resultado;
}

console.log(multiplicar(2, 5));
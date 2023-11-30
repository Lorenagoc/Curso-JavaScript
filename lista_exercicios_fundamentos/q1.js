function calculadora(n1, n2) {

    let soma = n1 + n2;
    let sub = n1 - n2;
    let div = n1 / n2;
    let mul = n1 * n2;

    const resultados = { 'soma': soma, 'subtração': sub, 'divisão': div, 'multiplicação': mul }

    return resultados;
}

console.log(calculadora(4, 2));
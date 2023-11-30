/**
 * É somado 10 + 20 + 30 após 2 segundos de espera
 */

const { resolve } = require("path");

function resolverDepoisDe2Segundos(problema) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(problema)
        }, 2000)
    })
}

async function adicionar(numero) {
    var num1 = resolverDepoisDe2Segundos(20);
    var num2 = resolverDepoisDe2Segundos(30);
    return numero + await num1 + await num2;
}

adicionar(10).then(resultado => {
    console.log(resultado)
})
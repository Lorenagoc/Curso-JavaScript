/**
 * Usar promise para encapsular a chamada de um arquivo
 */

const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise((resolve) => {
        fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString())
        })

        console.log("Eu fico depois do código assíncrono :)")
    })
}

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho).then(conteudo => console.log(conteudo))
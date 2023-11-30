function novoElemento(tagName, className) {
    const elem = document.createElement(tagName);
    elem.className = className;
    return elem
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

// const b = new Barreira(true)
// b.setAltura(200)
// document.querySelector('[wm-flappy]').appendChild(b.elemento) 

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true) // this permite que o objeto fique visível para fora função
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

// const b = new ParDeBarreiras(700, 200, 400)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaço, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaço),
        new ParDeBarreiras(altura, abertura, largura + espaço * 2),
        new ParDeBarreiras(altura, abertura, largura + espaço * 3)
    ]

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento) // x_novo = x_atual - deslocamento

            // quando o elemento sair da área do jogo
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaço * this.pares.length)
                par.sortearAbertura() // para as barreiras aparecerem de forma diferente novamente
            }

            const meio = largura / 2;
            const cruzouMeio = par.getX() + deslocamento >= meio && par.getX() < meio
            if (cruzouMeio) notificarPonto()
        })
    }
}

// const barreiras = new Barreiras(700, 1200, 200, 400)
// const areaDoJogo = document.querySelector('[wm-flappy]')
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(() => {
//     barreiras.animar()
// }, 10)

function Passaro(alturaJogo) {
    let voando = false
    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]) // altura que o passaro esta voando
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true // quando qualquer tecla for pressionada
    window.onkeyup = e => voando = false // quando a teclar for solta
    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight // encostar no maximo até o teto

        // restrição para o pássaro não passar dos limites
        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}

// const barreiras = new Barreiras(700, 1200, 200, 400)
// const passaro = new Passaro(700)
// const areaDoJogo = document.querySelector('[wm-flappy]')
// areaDoJogo.appendChild(passaro.elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()
// }, 20)

function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }

    this.atualizarPontos(0)
}

// const barreiras = new Barreiras(700, 1200, 250, 400)
// const passaro = new Passaro(700)
// const areaDoJogo = document.querySelector('[wm-flappy]')
// areaDoJogo.appendChild(passaro.elemento)
// areaDoJogo.appendChild(new Progresso().elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()
// }, 20)

function estaoSobrepostos(elementoA, elementoB) {
    // Retângulos associados aos elementos
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const colisaoHorizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const colisaoVertical = a.top + a.height >= b.top && b.top + b.height >= a.top

    return colisaoHorizontal && colisaoVertical
}

function colidiu(passaro, barreiras) {
    var colidiu = false // sem o var aconteceu um erro de "colidiu is not a function"
    barreiras.pares.forEach(parDeBarreiras => {
        if (!colidiu) {
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior) || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}

function FlappyBird() {
    let pontos = 0
    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso();
    const barreiras = new Barreiras(altura, largura, 250, 400, () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        // loop do jogo em cima de um temporizador
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) {
                console.log(colidiu(passaro, barreiras))
                clearInterval(temporizador)
            }
        }, 20)
    }
}

new FlappyBird().start()
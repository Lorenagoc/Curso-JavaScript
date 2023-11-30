const triangulo = function (lado1, lado2, lado3) {
    return (lado1 == lado2 == lado3) ? "É equilátero" : ((lado1 == lado2 || lado1 == lado3 || lado2 == lado3) ? "É isósceles" : "É escaleno");
}

console.log(triangulo(1, 3, 2))
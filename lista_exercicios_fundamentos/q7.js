function bhaskara(a, b, c) {
    const delta = Math.pow(b, 2) - (4 * a * c);

    if (delta < 0) {
        return "Delta é negativo";
    } else {
        return resultado = [
            -b + Math.sqrt(delta) / 2 * a,
            -b - Math.sqrt(delta) / 2 * a
        ]
    }
}

console.log(bhaskara(1, -10, 25));
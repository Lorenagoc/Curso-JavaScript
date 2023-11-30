function conceito(notas) {
    notas.forEach(nota => {
        if (nota < 4.9) {
            console.log(`Nota ${nota} => Conceito D`);
        } else if (nota >= 5 && nota < 6.9) {
            console.log(`Nota ${nota} => Conceito C`);
        } else if (nota >= 7 && nota < 8.9) {
            console.log(`Nota ${nota} => Conceito B`);
        } else if (nota >= 9 && nota < 10) {
            console.log(`Nota ${nota} => Conceito A`);
        } else {
            console.log(`Nota ${nota} => Nota inválida`);
        }
    });
}

conceito([9, 4.4, 2.5, 0, 5.7, 11, 15, 1.78]);
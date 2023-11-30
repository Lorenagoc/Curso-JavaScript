function calcula_multiplo_cinco(nota) {
    while (nota % 5 != 0) {
        nota++;
    }
    return nota;
}

function sistema_notas(nota) {
    if (nota >= 40) {
        //const multiplo_cinco = calcula_multiplo_cinco(nota);
        var multiplo_cinco = (num) => {
            while (num % 5 != 0) {
                num++;
            }
            return num;
        };

        if (!(multiplo_cinco(nota) > 100) && (multiplo_cinco(nota) - nota) < 3) {
            nota = multiplo_cinco(nota);
            return `Sua nota foi ${nota}. Você foi APROVADO!`;
        } else {
            return `Sua nota foi ${nota}. Você foi APROVADO!`;
        }

    } else {
        return `Sua nota foi ${nota}. Você foi REPROVADO!`;
    }
}

console.log(sistema_notas(84));
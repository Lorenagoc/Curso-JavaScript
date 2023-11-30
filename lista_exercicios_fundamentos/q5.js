function formata(numero){
    return `R$${(numero).toFixed(2).replace('.', ',')}`;
}

console.log(formata(0.30000000000000004));
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
];

// Retornar um array apenas com precos

const converteJson = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;
const precos = carrinho.map(converteJson).map(apenasPreco);
console.log(precos);
function frutas(fruta) {
    switch(fruta) {
        case 'maçã': console.log("Não vendemos essa fruta aqui."); break;
        case 'kiwi': console.log("Estamos com escassez de kiwi."); break;
        case 'melancia': console.log("Aqui está, são 3 reais o quilo."); break;
        default: console.log("Essa opção não é válida");
    }
}

frutas('banana');
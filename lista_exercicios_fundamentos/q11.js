function bissexto(ano) {
    if (ano % 4 == 0) {
        if (ano % 100 != 0) {
            return true;
        } else {
            if (ano % 400 == 0) {
                return true;
            }
        }
    }

    return false;
}

console.log(bissexto(2020));
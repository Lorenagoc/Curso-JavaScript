const fatorial = (num) => {
    let fat = 1;
    while(num > 0) {
        fat *= num;
        num--;
    }
    return fat;
}

console.log(fatorial(5));
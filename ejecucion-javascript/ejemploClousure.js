function padre() {
    let contador = 0;

    setTimeout(() => {
        contador = 1000;
    }, 10000);

    return function hijo() {
        contador = contador + 1;
        return contador;
    };
}

const funcionInterna = padre();

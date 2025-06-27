const n = parseInt(prompt('Digite a ordem da matriz: '));
    let matriz = [];
    for (let i = 0; i < n; i++) {
        let linha = [];
        for (let j = 0; j < n; j++) {
            linha.push(i === j ? 1 : 0);
        }
        matriz.push(linha);
    }

    for (let i = 0; i < n; i++) {
        console.log(matriz[i].join(' '));
    }

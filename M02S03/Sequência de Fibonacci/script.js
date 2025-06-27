let limite = parseInt(prompt("Digite um número para ser utilizado como limite da sequencia:"));
  let sequencia = [0, 1];
  if (limite < 0) {
      sequencia = [0];
  } else if (limite < 1) {
      sequencia = [0, 1];
  } else {
      let a = 0, b = 1;
      while (b <= limite) {
          let proximo = a + b;
          if (proximo > limite) break;
          sequencia.push(proximo);
          a = b;
          b = proximo;
      }
  }
  console.log(sequencia.join(', '));

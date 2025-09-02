var contador = {
  valor: 0,
  incrementar: function () {
    this.valor += 1;
    console.log(`O valor atual é ${this.valor}`);
  },
  decrementar: function () {
    this.valor -= 1;
    console.log(`O valor atual é ${this.valor}`);
  },
  mostrarValor: function () {
    console.log(`O valor atual é ${this.valor}`);
  }
};


contador.incrementar();
contador.decrementar();

contador.mostrarValor();

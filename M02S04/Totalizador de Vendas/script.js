const vendas = [
  { produto: "Notebook", valor: 2500 },
  { produto: "Monitor", valor: 1200 },
  { produto: "Teclado", valor: 250 }
];

let total = 0;

vendas.forEach(item => {
  console.log(`${item.produto} - R$ ${item.valor.toFixed(2)}`);
  total += item.valor;
});

console.log(`Total vendido: R$ ${total.toFixed(2)}`);

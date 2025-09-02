function filtrarLista(lista, propriedades, valores) {
  return lista.filter(item =>
    propriedades.every((prop, index) => item[prop] === valores[index])
  );
}

const dados = [
  { nome: "João", idade: 25, cidade: "São Paulo" },
  { nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
  { nome: "João", idade: 28, cidade: "São Paulo" },
  { nome: "Ana", idade: 25, cidade: "Belo Horizonte" }
];

const props = ["nome", "cidade"];
const vals = ["João", "São Paulo"];

const resultado = filtrarLista(dados, props, vals);
console.log(resultado);

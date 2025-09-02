const dados = {
  nome: "João",
  idade: null,
  cidade: "São Paulo",
  email: undefined
};
console.log(dados)

const dadosAtualizado = Object.fromEntries(Object.entries(dados).filter(([key, value]) => {
  return value !== null && value !== undefined;
}));
console.log(dadosAtualizado);
